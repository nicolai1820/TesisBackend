import {DataTypes} from 'sequelize';
import db from '../db/connection';
import Rol from './rol';


const Usuario = db.define('usuarios', {

    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },    
    estado: {
        type: DataTypes.BOOLEAN
    },
    cedula:{
        type: DataTypes.STRING
    },
});
Usuario.belongsTo(Rol, {
    foreignKey: {
      name: 'id_rol'
    }
  });



export default Usuario;