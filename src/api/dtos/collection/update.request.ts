import {IsEnum, IsNumberString, IsString} from "class-validator"
import {Blockchain} from "../../../enums"

export class UpdateBodyRequest {
    @IsString()
    name: string
}

export class UpdatePathRequest {
    @IsNumberString()
    id: string
}