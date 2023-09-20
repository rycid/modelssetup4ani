'use strict';

import { Sequelize, DataTypes } from "sequelize";
import fs from "fs";
import path from "path";

import * as dotenv from "dotenv";
dotenv.config({path: 'server/.env'});

const basename = path.basename(__filename);
const db: any = {};

const sequelize = new Sequelize(`${process.env.DB_DIALECT}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,{logging:false});

fs
    .readdirSync(__dirname)
    .filter((file: string) => {
        return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".ts");
    })
    .forEach((file: any) => {
        const model = require(path.join(__dirname, file))(sequelize, DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if(db[modelName].associate){
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
