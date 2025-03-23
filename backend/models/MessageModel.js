import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Messages = db.define('Messages',{
    name : DataTypes.STRING,
    message : DataTypes.STRING,
}, {
    freezeTableName : true
});

export default Messages;

(async() =>{
    await db.sync();
})();