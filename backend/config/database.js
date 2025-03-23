import { Sequelize } from "sequelize";

const db = new Sequelize('RecoverDB', 'root', '', {
    host: '104.197.117.136',
    dialect: 'mysql',

})

export default db;
