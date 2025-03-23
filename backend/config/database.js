import { Sequelize } from "sequelize";

const db = new Sequelize('RecoveryDatabase', 'root', '12345678', {
    host: '35.184.226.17',
    dialect: 'mysql',

})

export default db;