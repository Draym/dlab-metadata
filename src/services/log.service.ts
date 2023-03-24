import db from "../db/database"
import {Log} from "../interfaces"
import {Filter} from "@d-lab/api-kit"
import {LogEvent, LogScope} from "../enums"
import {nowUTC} from "@d-lab/common-kit"

class LogService {

    async create(scope: LogScope, event: LogEvent, code: string | null, message: string) {
        await db.Logs.create({
            scope: scope,
            event: event,
            code: code,
            message: message,
            createdAt: nowUTC()
        })
    }

    async findAll(filter: Filter): Promise<Log[]> {
        return db.Logs.findAll(filter.get())
    }
}

export default new LogService()