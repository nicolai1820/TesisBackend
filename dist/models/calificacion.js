"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usuario_1 = __importDefault(require("./usuario"));
const pregunta_1 = __importDefault(require("./pregunta"));
const Calificacion = connection_1.default.define('calificaciones', {
    calificacion: {
        type: sequelize_1.DataTypes.NUMBER
    },
    id_proyecto: {
        type: sequelize_1.DataTypes.NUMBER
    },
});
Calificacion.belongsTo(usuario_1.default, {
    foreignKey: {
        name: 'id_usuario'
    }
});
Calificacion.belongsTo(pregunta_1.default, {
    foreignKey: {
        name: 'id_pregunta'
    }
});
exports.default = Calificacion;
//# sourceMappingURL=calificacion.js.map