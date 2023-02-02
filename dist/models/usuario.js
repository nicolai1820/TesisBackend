"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const rol_1 = __importDefault(require("./rol"));
const Usuario = connection_1.default.define('usuarios', {
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    cedula: {
        type: sequelize_1.DataTypes.STRING
    },
});
Usuario.belongsTo(rol_1.default, {
    foreignKey: {
        name: 'id_rol'
    }
});
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map