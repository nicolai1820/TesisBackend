"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renewToken = exports.login = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const generar_jwt_1 = __importDefault(require("../helpers/generar-jwt"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        //Buscar usuario por email
        const usuario = yield usuario_1.default.findOne({
            where: { email: email },
        });
        //Validar existe usuario
        if (!usuario) {
            return res.status(400).json({
                errors: [{ msg: "Usuario o password no son correctos" }],
            });
        }
        //Convertir modelo a objeto
        const oUsuario = usuario.get({ plain: true });
        //Validar estado del usuario
        if (!oUsuario.estado) {
            return res.status(400).json({
                errors: [{ msg: " actualmente inhabilitado" }],
            });
        }
        //Validar Password
        const validPassword = bcryptjs_1.default.compareSync(password, oUsuario.password);
        if (!validPassword) {
            return res.status(400).json({
                errors: [{ msg: "Usuario o contraseña incorrecta" }],
            });
        }
        //Generar JWT
        console.log("PRINT LOGIN");
        const token = yield (0, generar_jwt_1.default)(oUsuario.id);
        console.log("PRINT LOGIN");
        console.log(token);
        res.json({
            usuario,
            token,
        });
    }
    catch (error) {
        res.status(500).json({
            msg: "Hable con el administrador 0001",
        });
    }
});
exports.login = login;
// export const registerUsuario = async (req: Request, res: Response) => {
//   const {
//     email,
//     password,
//   } = req.body;
//   try {
//     // //Encriptar password
//     const dificultad = bcryptjs.genSaltSync();
//     //REGISTRO USUARIO
//     const usuario = await Usuario.create({
//       email: email,
//       password: bcryptjs.hashSync(password, dificultad),
//       estado: true,
//       id_rol: 2,
//     });
//     const user = usuario!.get({ plain: true });
//     //Generar JWT
//     console.log("PRINT LOGIN");
//     const token = await generarJWT(user.id);
//     console.log("PRINT LOGIN");
//     console.log(token);
//     // //Borrar password del object
//     delete user.password;
//     res.json({
//       user,
//       token,
//       ok: true,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       msg: "Hable con el administrador 0002",
//     });
//   }
// };
const renewToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario, uid } = req.params;
    const user = usuario;
    const token = yield (0, generar_jwt_1.default)(uid);
    delete user.password;
    res.json({
        user,
        token,
    });
});
exports.renewToken = renewToken;
// export const recuperarPassword = async (req: Request, res: Response) => {
//     const { email } = req.body;
//     const usuario = await Usuario.findOne({ where: { email } });
//     //Validar existe usuario
//     if (!usuario) {
//         return res.status(400).json({
//             "errors": [
//                 { "msg": "Usuario o password no son correctos" }
//             ]
//         });
//     }
//     const newPass = generatePasswordRand(16, 'rand');
//     const dificultad = bcryptjs.genSaltSync();
//     const passwordF = bcryptjs.hashSync(newPass, dificultad);
//     const user: any = usuario;
//     await user!.update({
//         password: passwordF
//     });
//     //Borrar password del object
//     delete user.password;
//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//         host: "smtp.sendgrid.net",
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//             user: "apikey", // generated ethereal user
//             pass: "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", // generated ethereal password
//         },
//     });
//     console.log("aaquo vamos");
//     console.log(newPass);
//     // send mail with defined transport object
//     transporter.sendMail({
//         from: 'security@veytrans.emerald.studio', // sender address
//         to: email, // list of receivers
//         subject: "Recuperación contraseña ✔", // Subject line
//         text: "Veytrans", // plain text body
//         html: `<h4>Hola, ${email} has solicitado un codigo de autenticación. Esta será tu nueva contraseña: <b>${newPass}</b></h4>`, // html body
//     }, (error, info) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log("email enviado");
//         }
//     });
//     res.json({
//         msg: "Mensaje Enviado Correctamente"
//     })
// }
// function generatePasswordRand(length, type) {
//     let characters = "";
//     switch (type) {
//         case 'num':
//             characters = "0123456789";
//             break;
//         case 'alf':
//             characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//             break;
//         case 'rand':
//             //FOR ↓
//             break;
//         default:
//             characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//             break;
//     }
//     var pass = "";
//     for (var i = 0; i < length; i++) {
//         if (type == 'rand') {
//             pass += String.fromCharCode((Math.floor((Math.random() * 100)) % 94) + 33);
//         } else {
//             pass += characters.charAt(Math.floor(Math.random() * characters.length));
//         }
//     }
//     return pass;
// }
//# sourceMappingURL=auth.controller.js.map