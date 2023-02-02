import { DataTypes} from 'sequelize';
import db from '../db/connection';

const Rol = db.define('roles', {
    rol:{
        type: DataTypes.STRING,
    }

});

export default Rol;