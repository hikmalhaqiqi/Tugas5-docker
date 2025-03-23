import { Sequelize } from "sequelize";

const db = new Sequelize('RecoverDB', 'root', '12345678', {
    host: '104.197.117.136',
    dialect: 'mysql',

})

export default db;
