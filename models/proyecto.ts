import {DataTypes} from 'sequelize';
import db from '../db/connection';
import Rol from './rol';
import Usuario from './usuario';
import Estado from './estado';
import Ciudad from './ciudad';


const Proyecto = db.define('proyectos', {
    nombre:{
        type: DataTypes.STRING
    },
    descripcion:{
        type: DataTypes.STRING
    },    
    estado:{
        type: DataTypes.BOOLEAN
    },    
    notaJurado1:{
        type: DataTypes.STRING
    }, 
    notaJurado2:{
        type: DataTypes.STRING
    }, 
    notaTutor:{
        type: DataTypes.STRING
    }, 
    notaFinal:{
        type: DataTypes.STRING
    }, 
    pdf1:{
        type: DataTypes.STRING
    }, 
});
Proyecto.belongsTo(Usuario, {
    as: "estudiante_1",
    foreignKey: {
        name: 'id_estudiante_1'
    }
});

Proyecto.belongsTo(Usuario, {
    as: "estudiante_2",
    foreignKey: {
        name: 'id_estudiante_2'
    }
});

Proyecto.belongsTo(Usuario, {
    as: "jurado_1",
    foreignKey: {
        name: 'id_jurado_1'
    }
});

Proyecto.belongsTo(Usuario, {
    as: "jurado_2",
    foreignKey: {
        name: 'id_jurado_2'
    }
});

Proyecto.belongsTo(Usuario, {
    as: "tutor",
    foreignKey: {
        name: 'id_tutor'
    }
});

Proyecto.belongsTo(Estado, {
    as: "estadoProyecto",
    foreignKey: {
        name: 'id_estado'
    }
});

Proyecto.belongsTo(Ciudad, {
    as: "ciudad",
    foreignKey: {
        name: 'id_ciudad'
    }
});




export default Proyecto;