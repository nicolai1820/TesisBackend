import {Sequelize} from 'sequelize';

const db = new Sequelize('TesisDB', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
});

export default db;

