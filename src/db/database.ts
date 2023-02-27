import {Dialect, Sequelize} from "sequelize"
import {Options} from "sequelize/types/sequelize"
import {logger} from "@d-lab/api-kit"

import {init as initLogModel} from "../models/log.model"
import {init as initCollectionModel} from "../models/collection.model"
import {init as initModelModel} from "../models/model.model"
import {init as initTokenModel} from "../models/token.model"

export const connectionParams: Options = {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    dialect: "mysql" as Dialect,
    database: process.env.MYSQL_DB_NAME,
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT!),
    pool: {
        min: 0,
        max: 5,
    },
    define: {
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
        underscored: true,
        freezeTableName: true,
    },
    timezone: "+08:00",
    logQueryParameters: process.env.NODE_ENV === "development",
    logging: function (sql: string, timing?: number) {
        logger.info(sql)
    },
    benchmark: true,
}

const sequelize = new Sequelize(connectionParams)

export {sequelize}

const db = {
    Logs: initLogModel(sequelize),
    Collections: initCollectionModel(sequelize),
    Models: initModelModel(sequelize),
    Tokens: initTokenModel(sequelize)
}

export default db
