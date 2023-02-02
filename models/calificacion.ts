import {DataTypes} from 'sequelize';
import db from '../db/connection';
import Proyecto from './proyecto';
import Usuario from './usuario';
import Pregunta from './pregunta';


const Calificacion = db.define('calificaciones', {

    calificacion:{
        type: DataTypes.NUMBER
    },
    id_proyecto:{
      type: DataTypes.NUMBER
  },
});

  Calificacion.belongsTo(Usuario, {
    foreignKey: {
      name: 'id_usuario'
    }
  });

  Calificacion.belongsTo(Pregunta, {
    foreignKey: {
      name: 'id_pregunta'
    }
  });


export default Calificacion;