import DB_CONFIG from "../config/db.config.js";
import Sequelize from "sequelize";
import user from "./user.model.js";
import org from "./org.model.js";
import assessment from "./assessment.model.js";

const sequelize = new Sequelize(DB_CONFIG.DB, DB_CONFIG.USER, DB_CONFIG.PASSWORD, {
    host: DB_CONFIG.HOST, 
    dialect: DB_CONFIG.dialect,
    pool: {
        max: DB_CONFIG.pool.max,
        min: DB_CONFIG.pool.min,
        acquire: DB_CONFIG.pool.acquire,
        idle: DB_CONFIG.pool.idle
    }
});

export const db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    user: user(sequelize, Sequelize),
    org: org(sequelize, Sequelize),
    assessment: assessment(sequelize, Sequelize)
};

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

export default db;