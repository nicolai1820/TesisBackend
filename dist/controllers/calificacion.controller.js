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
exports.postCalcularCalificacion = exports.postCalificacion = exports.getCalificaciones = void 0;
const calificacion_1 = __importDefault(require("../models/calificacion"));
const sequelize_1 = require("sequelize");
const usuario_1 = __importDefault(require("../models/usuario"));
const sequelize_2 = require("sequelize");
const proyecto_1 = __importDefault(require("../models/proyecto"));
const getCalificaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.params;
    const calificacion = yield calificacion_1.default.findAll();
    if (calificacion) {
        res.json({
            calificacion: calificacion
        });
    }
    else {
        res.status(404).json({
            msg: `No existe una calificacion con el id ${uid}`
        });
    }
});
exports.getCalificaciones = getCalificaciones;
const postCalificacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid, usuario } = req.params;
    const { idProyecto, idPregunta1, calificacion1, idPregunta2, calificacion2, idPregunta3, calificacion3, idPregunta4, calificacion4, idPregunta5, calificacion5, idPregunta6, calificacion6, idPregunta7, calificacion7, idPregunta8, calificacion8, idPregunta9, calificacion9, idPregunta10, calificacion10, idPregunta11, calificacion11, idPregunta12, calificacion12, idPregunta13, calificacion13, idPregunta14, calificacion14, idPregunta15, calificacion15, idPregunta16, calificacion16, idPregunta17, calificacion17, idPregunta18, calificacion18, idPregunta19, calificacion19, idPregunta20, calificacion20, idPregunta21, calificacion21, idPregunta22, calificacion22, idPregunta23, calificacion23, idPregunta24, calificacion24, idPregunta25, calificacion25, idPregunta26, calificacion26, idPregunta27, calificacion27, idPregunta28, calificacion28, idPregunta29, calificacion29, idPregunta30, calificacion30, } = req.body;
    try {
        console.log("USUARIO DATA; ", usuario.id_rol);
        const califi = yield calificacion_1.default.findAll({
            where: { [sequelize_1.Op.and]: [
                    { id_proyecto: idProyecto },
                    { id_usuario: uid },
                ] },
            raw: true
        });
        if (califi.length != 0) {
            return res.status(400).json({
                errors: [{ msg: "Este usuario ya calificó este proyecto" }],
            });
        }
        if (usuario.id_rol == 4) {
            return res.status(400).json({
                errors: [{ msg: "Este usuario no puede calificar" }],
            });
        }
        console.log("ID PREGUNTA 5", idPregunta5);
        const promesa1 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion1,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta1,
            id_usuario: uid,
        });
        const promesa2 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion2,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta2,
            id_usuario: uid,
        });
        const promesa3 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion3,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta3,
            id_usuario: uid,
        });
        const promesa4 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion4,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta4,
            id_usuario: uid,
        });
        const promesa5 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion5,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta5,
            id_usuario: uid,
        });
        const promesa6 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion6,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta6,
            id_usuario: uid,
        });
        const promesa7 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion7,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta7,
            id_usuario: uid,
        });
        const promesa8 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion8,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta8,
            id_usuario: uid,
        });
        const promesa9 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion9,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta9,
            id_usuario: uid,
        });
        const promesa10 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion10,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta10,
            id_usuario: uid,
        });
        const promesa11 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion11,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta11,
            id_usuario: uid,
        });
        const promesa12 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion12,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta12,
            id_usuario: uid,
        });
        const promesa13 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion13,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta13,
            id_usuario: uid,
        });
        const promesa14 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion14,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta14,
            id_usuario: uid,
        });
        const promesa15 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion15,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta15,
            id_usuario: uid,
        });
        const promesa16 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion16,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta16,
            id_usuario: uid,
        });
        const promesa17 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion17,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta17,
            id_usuario: uid,
        });
        const promesa18 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion18,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta18,
            id_usuario: uid,
        });
        const promesa19 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion19,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta19,
            id_usuario: uid,
        });
        const promesa20 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion20,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta20,
            id_usuario: uid,
        });
        const promesa21 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion21,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta21,
            id_usuario: uid,
        });
        const promesa22 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion22,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta22,
            id_usuario: uid,
        });
        const promesa23 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion23,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta23,
            id_usuario: uid,
        });
        const promesa24 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion24,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta24,
            id_usuario: uid,
        });
        const promesa25 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion25,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta25,
            id_usuario: uid,
        });
        const promesa26 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion26,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta26,
            id_usuario: uid,
        });
        const promesa27 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion27,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta27,
            id_usuario: uid,
        });
        const promesa28 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion28,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta28,
            id_usuario: uid,
        });
        const promesa29 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion29,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta29,
            id_usuario: uid,
        });
        const promesa30 = yield calificacion_1.default.create({
            id_proyecto: idProyecto,
            calificacion: calificacion30,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta30,
            id_usuario: uid,
        });
        res.json({
            calificacion: true,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador 0002'
        });
    }
});
exports.postCalificacion = postCalificacion;
const postCalcularCalificacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idProyecto } = req.body;
    try {
        const calificaciones = yield calificacion_1.default.findAll({
            attributes: [[sequelize_2.Sequelize.fn('AVG', sequelize_2.Sequelize.col('Calificaciones.calificacion')), 'promedio']],
            group: ['id_usuario'],
            where: { id_proyecto: idProyecto },
            include: [{ model: usuario_1.default, attributes: ["id_rol", "id"] }],
            raw: true
        });
        console.log("tamañop calificaicoines", calificaciones.length);
        if (calificaciones.length != 3) {
            return res.status(404).json({
                msg: `Aun faltan calificaciones para este proyecto`
            });
        }
        let calificacionTutor = 0;
        let calificacionJurado1 = 0;
        let calificacionJurado2 = 0;
        let calificacionTutorFinal = 0;
        let calificacionJurado1Final = 0;
        let calificacionJurado2Final = 0;
        if (calificaciones[0]["usuario.id_rol"] == 2) {
            calificacionTutor = calificaciones[0]["promedio"] * 0.5;
            calificacionJurado1 = calificaciones[1]["promedio"] * 0.25;
            calificacionJurado2 = calificaciones[2]["promedio"] * 0.25;
            calificacionTutorFinal = calificaciones[0]["promedio"];
            calificacionJurado1Final = calificaciones[1]["promedio"];
            calificacionJurado2Final = calificaciones[2]["promedio"];
        }
        else if (calificaciones[1]["usuario.id_rol"] == 2) {
            calificacionTutor = calificaciones[1]["promedio"] * 0.5;
            calificacionJurado1 = calificaciones[0]["promedio"] * 0.25;
            calificacionJurado2 = calificaciones[2]["promedio"] * 0.25;
            calificacionTutorFinal = calificaciones[1]["promedio"];
            calificacionJurado1Final = calificaciones[0]["promedio"];
            calificacionJurado2Final = calificaciones[2]["promedio"];
        }
        else if (calificaciones[2]["usuario.id_rol"] == 2) {
            calificacionTutor = calificaciones[2]["promedio"] * 0.5;
            calificacionJurado1 = calificaciones[0]["promedio"] * 0.25;
            calificacionJurado2 = calificaciones[1]["promedio"] * 0.25;
            calificacionTutorFinal = calificaciones[2]["promedio"];
            calificacionJurado1Final = calificaciones[0]["promedio"];
            calificacionJurado2Final = calificaciones[1]["promedio"];
        }
        console.log("calificacion tutor", calificacionTutor);
        console.log("calificacion jurado1", calificacionJurado1);
        console.log("calificacion jurado2", calificacionJurado2);
        let notaFinal = calificacionTutor + calificacionJurado1 + calificacionJurado2;
        const proyecto = yield proyecto_1.default.findByPk(idProyecto);
        yield proyecto.update({
            notaFinal: notaFinal,
            notaJurado1: calificacionJurado1Final,
            notaJurado2: calificacionJurado2Final,
            notaTutor: calificacionTutorFinal
        });
        res.json({
            notaFinal,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador 0002'
        });
    }
});
exports.postCalcularCalificacion = postCalcularCalificacion;
//# sourceMappingURL=calificacion.controller.js.map