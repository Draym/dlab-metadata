import db from "../db/database"
import {Log} from "../interfaces"
import {Filter, nowUTC, Page} from "@d-lab/api-kit"
import {LogEvent, LogScope} from "../enums"

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