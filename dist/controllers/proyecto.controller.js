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
exports.getActaGradoEstudiante = exports.getActaGrado = exports.deleteProyecto = exports.putProyecto = exports.postProyecto = exports.getProyectos = void 0;
const proyecto_1 = __importDefault(require("../models/proyecto"));
const usuario_1 = __importDefault(require("../models/usuario"));
const html_pdf_1 = __importDefault(require("html-pdf"));
const sequelize_1 = require("sequelize");
const cloudinary_1 = __importDefault(require("cloudinary"));
const getProyectos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.params;
    const proyectos = yield proyecto_1.default.findAll({
        raw: true,
        include: [
            { model: usuario_1.default, as: "estudiante_1", attributes: ["email"] },
            { model: usuario_1.default, as: "estudiante_2", attributes: ["email"] },
            { model: usuario_1.default, as: "jurado_1", attributes: ["email"] },
            { model: usuario_1.default, as: "jurado_2", attributes: ["email"] },
            { model: usuario_1.default, as: "tutor", attributes: ["email"] }
        ]
    });
    if (proyectos) {
        res.json({
            proyectos: proyectos
        });
    }
    else {
        res.status(404).json({
            msg: `No existe proyectos`
        });
    }
});
exports.getProyectos = getProyectos;
const postProyecto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, descripcion, id_estudiante_1, id_estudiante_2, id_jurado_1, id_jurado_2, id_tutor, id_ciudad, pdf1 } = req.body;
    try {
        cloudinary_1.default.v2.config({
            cloud_name: "dlmfm6mvx",
            api_key: "614354355368952",
            api_secret: "r2LMEYiFJwbzwOGqGms7jVGrWJs",
        });
        console.log("PDF1 LOG: ", req["files"]);
        if (req["files"] == undefined) {
            return res.status(400).json({
                errors: [{ msg: "Se debe adjuntar el archivo del proyecto" }],
            });
        }
        console.log("PDF1 LOG2: ", req["files"].pdf1);
        const { tempFilePath: pdf1 } = req["files"].pdf1;
        const { secure_url: pdfFinal } = yield cloudinary_1.default.v2.uploader.upload(pdf1, {
            folder: "pdfs",
        });
        const proyecto = yield proyecto_1.default.create({
            nombre: nombre,
            descripcion: descripcion,
            id_estudiante_1: id_estudiante_1,
            id_estudiante_2: id_estudiante_2,
            id_jurado_1: id_jurado_1,
            id_jurado_2: id_jurado_2,
            id_tutor: id_tutor,
            id_estado: 4,
            id_ciudad: id_ciudad,
            estado: true,
            pdf1: pdfFinal.replace("upload/", "upload/fl_attachment/")
        });
        res.json({
            proyecto,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador 0002'
        });
    }
});
exports.postProyecto = postProyecto;
const putProyecto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.params;
    const _a = req.body, { id } = _a, body = __rest(_a, ["id"]);
    try {
        //Actualizar usuario
        const proyecto = yield proyecto_1.default.findByPk(id);
        yield proyecto.update(body);
        //Respuesta al front
        res.json({
            proyecto: proyecto
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putProyecto = putProyecto;
const deleteProyecto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.params;
    const _b = req.body, { id } = _b, body = __rest(_b, ["id"]);
    try {
        //Actualizar usuario
        const proyecto = yield proyecto_1.default.findByPk(id);
        yield proyecto.update({
            estado: false
        });
        //Respuesta al front
        res.json({
            proyectos: proyecto
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.deleteProyecto = deleteProyecto;
const getActaGrado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idProyecto } = req.params;
    try {
        console.log(idProyecto);
        const proyecto = yield proyecto_1.default.findOne({ where: { id: idProyecto }, raw: true, include: [
                { model: usuario_1.default, as: "estudiante_1", attributes: ["email"] },
                { model: usuario_1.default, as: "estudiante_2", attributes: ["email"] },
                { model: usuario_1.default, as: "jurado_1", attributes: ["email"] },
                { model: usuario_1.default, as: "jurado_2", attributes: ["email"] },
                { model: usuario_1.default, as: "tutor", attributes: ["email"] }
            ] });
        console.log("proyecto:", proyecto);
        let fechaActual = new Date();
        console.log(fechaActual);
        let dia = fechaActual.getDate();
        let mes = fechaActual.getMonth() + 1;
        let ano = fechaActual.getFullYear();
        console.log("dia: ", dia);
        console.log("mes: ", mes);
        console.log("año: ", ano);
        const content = `
        <html>
        <head><meta http-equiv=Content-Type content="text/html; charset=UTF-8">
        </head>
        <style>
            table, th, td {
            border:1px solid black;
            }
        </style>
        <body>
        <p style="text-align: center; color:#041C53"><b>INSTITUCION UNIVERSITARIA</b></p>    
        <p style="text-align: center;color: #041C53"><b>POLITECNICO GRANCOLOMBIANO</b></p>
        <p style="text-align: center;color: #041C53"><b>POSTGRADOS, INVESTIGACION Y BIBLIOTECAS</b></p>
        <p style="text-align: center;color: #041C53"><b>DEPARTAMENTO DE INVESTIGACION DESARROLLO E INNOVACION</b></p>
        <p style="text-align: center;color: #041C53"><b>INGENIERIA DE SISTEMAS</b></p>
        <p style="text-align: center;color: #041C53"><b>ACTA DE SUSTENTACION TRABAJO DE GRADO</b></p>
        <p style="text-align: center;color: #041C53"><br></p>
        <p style="text-align: center;color: #041C53">El dia <b>${dia}</b> del mes <b>${mes}</b> del año <b>${ano}</b>, se convoca a los estudiantes: <b>${proyecto["estudiante_1.email"]}</b> y <b>${proyecto["estudiante_2.email"]}</b> del programa de Ingenieria de Sistemas para sustentar su trabajo de grado denominado como <b>${proyecto["nombre"]}</b> El trabajo tiene como director al tutor <b>${proyecto["tutor.email"]}</b>  y como jurados a <b>${proyecto["jurado_1.email"]}</b>, <b>${proyecto["jurado_2.email"]}</b>.</p>
        <p style="text-align: center;color: #041C53"><br></p>
        <p style="text-align: center;color: #041C53">Teniendo en cuenta el formato de evaluacion de trabajos de grado definido por la Facultad para el trabajo de Maestria, los cuales hacen parte integral de esta acta las notas para este trabajo son&nbsp;</p>
        <p style="text-align: center;color: #041C53"><br></p>
        <table style="width: 100%;">
        <tbody>
            <tr>
                <td style="width: 50.0000%;"><b>Profesores</b></td>
                <td style="width: 50.0000%;"><b>Nota</b></td>
            </tr>
            <tr>
                <td style="width: 50.0000%;">Jurado 1: ${proyecto["jurado_1.email"]};</td>
                <td style="width: 50.0000%;">${proyecto["notaJurado1"]}</td>
            </tr>
            <tr>
                <td style="width: 50.0000%;">Jurado 2: ${proyecto["jurado_2.email"]}</td>
                <td style="width: 50.0000%;">${proyecto["notaJurado2"]}</td>
            </tr>
            <tr>
                <td style="width: 50.0000%;">Tutor: ${proyecto["tutor.email"]}</td>
                <td style="width: 50.0000%;">${proyecto["notaTutor"]}</td>
            </tr>
            <tr>
            <td style="width: 50.0000%;"><b>Nota Final:</b> </td>
            <td style="width: 50.0000%;">${proyecto["notaFinal"]}</td>
        </tr>
        </tbody>
        </table>
        </body>
        </html>
        `;
        html_pdf_1.default.create(content).toBuffer(function (err, buffer) {
            if (err)
                return res.send(err);
            res.type('pdf');
            res.end(buffer, 'binary');
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getActaGrado = getActaGrado;
const getActaGradoEstudiante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idUsuario } = req.params;
    try {
        console.log(idUsuario);
        const proyecto = yield proyecto_1.default.findOne({ where: { [sequelize_1.Op.or]: [
                    { id_estudiante_1: idUsuario },
                    { id_estudiante_2: idUsuario },
                ] }, raw: true, include: [
                { model: usuario_1.default, as: "estudiante_1", attributes: ["email"] },
                { model: usuario_1.default, as: "estudiante_2", attributes: ["email"] },
                { model: usuario_1.default, as: "jurado_1", attributes: ["email"] },
                { model: usuario_1.default, as: "jurado_2", attributes: ["email"] },
                { model: usuario_1.default, as: "tutor", attributes: ["email"] }
            ] });
        if (!proyecto) {
            return res.status(400).json("Este usuario aun no tiene un acta disponible para descargar");
        }
        console.log("proyecto:", proyecto);
        let fechaActual = new Date();
        console.log(fechaActual);
        let dia = fechaActual.getDate();
        let mes = fechaActual.getMonth() + 1;
        let ano = fechaActual.getFullYear();
        console.log("dia: ", dia);
        console.log("mes: ", mes);
        console.log("año: ", ano);
        const content = `
        <html>
        <head><meta http-equiv=Content-Type content="text/html; charset=UTF-8">
        </head>
        <style>
            table, th, td {
            border:1px solid black;
            }
        </style>
        <body>
        <p style="text-align: center; color:#041C53"><b>INSTITUCION UNIVERSITARIA</b></p>    
        <p style="text-align: center;color: #041C53"><b>POLITECNICO GRANCOLOMBIANO</b></p>
        <p style="text-align: center;color: #041C53"><b>POSTGRADOS, INVESTIGACION Y BIBLIOTECAS</b></p>
        <p style="text-align: center;color: #041C53"><b>DEPARTAMENTO DE INVESTIGACION DESARROLLO E INNOVACION</b></p>
        <p style="text-align: center;color: #041C53"><b>INGENIERIA DE SISTEMAS</b></p>
        <p style="text-align: center;color: #041C53"><b>ACTA DE SUSTENTACION TRABAJO DE GRADO</b></p>
        <p style="text-align: center;color: #041C53"><br></p>
        <p style="text-align: center;color: #041C53">El dia <b>${dia}</b> del mes <b>${mes}</b> del año <b>${ano}</b>, se convoca a los estudiantes: <b>${proyecto["estudiante_1.email"]}</b> y <b>${proyecto["estudiante_2.email"]}</b> del programa de Ingenieria de Sistemas para sustentar su trabajo de grado denominado como <b>${proyecto["nombre"]}</b> El trabajo tiene como director al tutor <b>${proyecto["tutor.email"]}</b>  y como jurados a <b>${proyecto["jurado_1.email"]}</b>, <b>${proyecto["jurado_2.email"]}</b>.</p>
        <p style="text-align: center;color: #041C53"><br></p>
        <p style="text-align: center;color: #041C53">Teniendo en cuenta el formato de evaluacion de trabajos de grado definido por la Facultad para el trabajo de Maestria, los cuales hacen parte integral de esta acta las notas para este trabajo son&nbsp;</p>
        <p style="text-align: center;color: #041C53"><br></p>
        <table style="width: 100%;">
        <tbody>
            <tr>
                <td style="width: 50.0000%;"><b>Profesores</b></td>
                <td style="width: 50.0000%;"><b>Nota</b></td>
            </tr>
            <tr>
                <td style="width: 50.0000%;">Jurado 1: ${proyecto["jurado_1.email"]};</td>
                <td style="width: 50.0000%;">${proyecto["notaJurado1"]}</td>
            </tr>
            <tr>
                <td style="width: 50.0000%;">Jurado 2: ${proyecto["jurado_2.email"]}</td>
                <td style="width: 50.0000%;">${proyecto["notaJurado2"]}</td>
            </tr>
            <tr>
                <td style="width: 50.0000%;">Tutor: ${proyecto["tutor.email"]}</td>
                <td style="width: 50.0000%;">${proyecto["notaTutor"]}</td>
            </tr>
            <tr>
            <td style="width: 50.0000%;"><b>Nota Final:</b> </td>
            <td style="width: 50.0000%;">${proyecto["notaFinal"]}</td>
        </tr>
        </tbody>
        </table>
        </body>
        </html>
        `;
        html_pdf_1.default.create(content).toBuffer(function (err, buffer) {
            if (err)
                return res.send(err);
            res.type('pdf');
            res.end(buffer, 'binary');
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getActaGradoEstudiante = getActaGradoEstudiante;
//# sourceMappingURL=proyecto.controller.js.map