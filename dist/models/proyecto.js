"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usuario_1 = __importDefault(require("./usuario"));
const estado_1 = __importDefault(require("./estado"));
const ciudad_1 = __importDefault(require("./ciudad"));
const Proyecto = connection_1.default.define('proyectos', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    notaJurado1: {
        type: sequelize_1.DataTypes.STRING
    },
    notaJurado2: {
        type: sequelize_1.DataTypes.STRING
    },
    notaTutor: {
        type: sequelize_1.DataTypes.STRING
    },
    notaFinal: {
        type: sequelize_1.DataTypes.STRING
    },
    pdf1: {
        type: sequelize_1.DataTypes.STRING
    },
});
Proyecto.belongsTo(usuario_1.default, {
    as: "estudiante_1",
    foreignKey: {
        name: 'id_estudiante_1'
    }
});
Proyecto.belongsTo(usuario_1.default, {
    as: "estudiante_2",
    foreignKey: {
        name: 'id_estudiante_2'
    }
});
Proyecto.belongsTo(usuario_1.default, {
    as: "jurado_1",
    foreignKey: {
        name: 'id_jurado_1'
    }
});
Proyecto.belongsTo(usuario_1.default, {
    as: "jurado_2",
    foreignKey: {
        name: 'id_jurado_2'
    }
});
Proyecto.belongsTo(usuario_1.default, {
    as: "tutor",
    foreignKey: {
        name: 'id_tutor'
    }
});
Proyecto.belongsTo(estado_1.default, {
    as: "estadoProyecto",
    foreignKey: {
        name: 'id_estado'
    }
});
Proyecto.belongsTo(ciudad_1.default, {
    as: "ciudad",
    foreignKey: {
        name: 'id_ciudad'
    }
});
exports.default = Proyecto;
//# sourceMappingURL=proyecto.js.map