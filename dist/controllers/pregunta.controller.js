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
exports.putPregunta = exports.getPreguntas = void 0;
const pregunta_1 = __importDefault(require("../models/pregunta"));
const getPreguntas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.params;
    const pregunta = yield pregunta_1.default.findAll();
    if (pregunta) {
        res.json({
            preguntas: pregunta
        });
    }
    else {
        res.status(404).json({
            msg: `No existe preguntas con el id ${uid}`
        });
    }
});
exports.getPreguntas = getPreguntas;
const putPregunta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.params;
    const _a = req.body, { id_pregunta, alias, modulo } = _a, body = __rest(_a, ["id_pregunta", "alias", "modulo"]);
    try {
        //Actualizar usuario
        const pregunta = yield pregunta_1.default.findByPk(id_pregunta);
        if (!pregunta) {
            return res.status(400).json({
                errors: [{ msg: "No se encontró ninguna pregunta con este id" }],
            });
        }
        yield pregunta.update(body);
        //Respuesta al front
        res.json({
            pregunta: pregunta
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putPregunta = putPregunta;
//# sourceMappingURL=pregunta.controller.js.map