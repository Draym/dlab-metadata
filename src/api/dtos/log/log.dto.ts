import {LogEvent, LogScope} from "../../../enums"

export default interface LogDto {
    id: number
    scope: LogScope
    event: LogEvent
    code: string | null
    message: string
    createdAt: Date
}