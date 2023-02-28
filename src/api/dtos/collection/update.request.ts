import {IsNumberString, IsObject} from "class-validator"
import {PartialMetadataRequest} from "./metadata"

export class UpdateBodyRequest {
    @IsObject()
    metadata: PartialMetadataRequest
}

export class UpdatePathRequest {
    @IsNumberString()
    id: string
}