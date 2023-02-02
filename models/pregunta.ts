import { DataTypes} from 'sequelize';
import db from '../db/connection';

const Pregunta = db.define('preguntas', {
    pregunta:{
        type: DataTypes.STRING,
    },
    alias:{
        type: DataTypes.STRING,
    },
    modulo:{
        type: DataTypes.NUMBER,
    },
    

});

export default Pregunta;