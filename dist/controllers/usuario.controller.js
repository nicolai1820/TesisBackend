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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuarioDashboard = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const rol_1 = __importDefault(require("../models/rol"));
const generar_jwt_1 = __importDefault(require("../helpers/generar-jwt"));
const usuario_1 = __importDefault(require("../models/usuario"));
const path = require("path");
const getUsuarioDashboard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.params;
    const usuarios = yield usuario_1.default.findAll({ include: rol_1.default, raw: true });
    //   console.log("Usuario1", usuarios);
    console.log("Usuarios", usuarios);
    if (usuarios) {
        res.json({
            usuarios,
        });
    }
    else {
        res.status(404).json({
            msg: `No existe el usuario con el id ${uid}`,
        });
    }
});
exports.getUsuarioDashboard = getUsuarioDashboard;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, 
    // nombre,
    // tipoDocumento,
    // documento,
    // idCiudad,
    // telefono,
    // direccion,
    cedula, id_rol } = req.body;
    try {
        // //Encriptar password
        const dificultad = bcryptjs_1.default.genSaltSync();
        //REGISTRO USUARIO
        const usuario = yield usuario_1.default.create({
            email: email,
            password: bcryptjs_1.default.hashSync(password, dificultad),
            estado: true,
            cedula: cedula,
            id_rol: id_rol,
        });
        const user = usuario.get({ plain: true });
        //Generar JWT
        console.log("PRINT LOGIN");
        const token = yield (0, generar_jwt_1.default)(user.id);
        console.log("PRINT LOGIN");
        console.log(token);
        // //Borrar password del object
        delete user.password;
        res.json({
            user,
            token,
            ok: true,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador 0002",
        });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.params;
    const _a = req.body, { password, id } = _a, body = __rest(_a, ["password", "id"]);
    console.log("Body", body);
    let passwordValid = "";
    try {
        if (!id) {
            return res.status(400).json({
                errors: [{ msg: "No se envio un id correcto" }],
            });
        }
        const user = yield usuario_1.default.findByPk(id, { include: rol_1.default, raw: true });
        if (!user) {
            return res.status(400).json({
                errors: [{ msg: "No se encontró ningun usuario con este id" }],
            });
        }
        console.log("Password Recibido", password);
        //Actualizar usuario
        if (password && password != "") {
            console.log("Password Usuario existe", user["password"]);
            console.log("New Password", passwordValid);
            if (user["password"] != password) {
                console.log("Entró a actualizar contraseña");
                const dificultad = bcryptjs_1.default.genSaltSync();
                passwordValid = bcryptjs_1.default.hashSync(password, dificultad);
                body.password = passwordValid;
            }
        }
        console.log("Body ===", body);
        const userFinal = yield usuario_1.default.findByPk(id);
        yield userFinal.update(body);
        //Respuesta al front
        res.json({
            usuario: userFinal,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.params;
    const _b = req.body, { password, id } = _b, body = __rest(_b, ["password", "id"]);
    try {
        if (!id) {
            return res.status(400).json({
                errors: [{ msg: "No se envio un id correcto" }],
            });
        }
        //Actualizar usuario
        const user = yield usuario_1.default.findByPk(id, { include: rol_1.default });
        yield user.update({
            estado: false,
        });
        //Respuesta al front
        res.json({
            usuario: user,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuario.controller.js.map