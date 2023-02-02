import { DataTypes} from 'sequelize';
import db from '../db/connection';

const Estado = db.define('estados', {
    estado:{
        type: DataTypes.STRING,
    }

});

export default Estado;