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
exports.deleteCiudad = exports.putCiudad = exports.postCiudad = exports.getCiudadesTrueDashboard = exports.getCiudadesDashboard = void 0;
const ciudad_1 = __importDefault(require("../models/ciudad"));
const getCiudadesDashboard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.params;
    const ciudad = yield ciudad_1.default.findAll();
    if (ciudad) {
        res.json({
            ciudades: ciudad
        });
    }
    else {
        res.status(404).json({
            msg: `No existe el usuario con el id ${uid}`
        });
    }
});
exports.getCiudadesDashboard = getCiudadesDashboard;
const getCiudadesTrueDashboard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.params;
    const ciudad = yield ciudad_1.default.findAll({ where: {
            estado: true
        } });
    if (ciudad) {
        res.json({
            ciudades: ciudad
        });
    }
    else {
        res.status(404).json({
            msg: `No existe el usuario con el id ${uid}`
        });
    }
});
exports.getCiudadesTrueDashboard = getCiudadesTrueDashboard;
const postCiudad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ciudad } = req.body;
    try {
        const ciudades = yield ciudad_1.default.create({
            ciudad: ciudad,
            estado: true,
        });
        res.json({
            ciudades,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador 0002'
        });
    }
});
exports.postCiudad = postCiudad;
const putCiudad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.params;
    const _a = req.body, { id } = _a, body = __rest(_a, ["id"]);
    try {
        //Actualizar usuario
        const ciudad = yield ciudad_1.default.findByPk(id);
        yield ciudad.update(body);
        //Respuesta al front
        res.json({
            ciudades: ciudad
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putCiudad = putCiudad;
const deleteCiudad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.params;
    const _b = req.body, { id } = _b, body = __rest(_b, ["id"]);
    try {
        //Actualizar usuario
        const ciudad = yield ciudad_1.default.findByPk(id);
        yield ciudad.update({
            estado: false
        });
        //Respuesta al front
        res.json({
            ciudades: ciudad
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.deleteCiudad = deleteCiudad;
//# sourceMappingURL=ciudad.controller.js.map