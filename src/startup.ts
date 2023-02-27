import {connectionParams, sequelize} from "./db/database"
import {logger} from "@d-lab/api-kit"

async function setupDatabase(): Promise<void> {
    return sequelize.authenticate({
        retry: {
            max: 5,
        },
    })
}

export default function () {
    setupDatabase()
        .then(_ => logger.success(`[server] Database is running at http://${connectionParams.host}:${connectionParams.port}`))
        .catch(logger.error)
}