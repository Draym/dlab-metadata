import {IsNumberString, IsObject} from "class-validator"
import {PartialMetadataRequest} from "./metadata"

export class UpdateBodyRequest extends PartialMetadataRequest {
}

export class UpdatePathRequest {
    @IsNumberString()
    id: string
}