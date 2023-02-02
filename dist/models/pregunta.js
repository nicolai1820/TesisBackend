"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Pregunta = connection_1.default.define('preguntas', {
    pregunta: {
        type: sequelize_1.DataTypes.STRING,
    },
    alias: {
        type: sequelize_1.DataTypes.STRING,
    },
    modulo: {
        type: sequelize_1.DataTypes.NUMBER,
    },
});
exports.default = Pregunta;
//# sourceMappingURL=pregunta.js.map