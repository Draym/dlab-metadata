import {LogEvent, LogScope} from "../../../enums"
import {IsDateString, IsEnum, IsString} from "class-validator"
import {PageRequest, SkipNull} from "@d-lab/api-kit"

export default class ListRequest extends PageRequest {
    @IsEnum(LogScope)
    @SkipNull()
    scope: LogScope | null
    @IsEnum(LogEvent)
    @SkipNull()
    event: LogEvent | null
    @IsString()
    @SkipNull()
    code: string | null
    @IsString()
    @SkipNull()
    message: string | null
    @IsDateString()
    @SkipNull()
    createdAfter: string | null
    @IsDateString()
    @SkipNull()
    createdBefore: string | null
}