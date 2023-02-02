import {DataTypes} from 'sequelize';
import db from '../db/connection';


const Ciudad = db.define('ciudades', {

    ciudad:{
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },

});


export default Ciudad;