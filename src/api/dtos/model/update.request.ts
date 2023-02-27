import {IsNumberString, IsObject} from "class-validator"
import {PartialMetadataRequest} from "../token/metadata"

export class UpdateBodyRequest {
    @IsObject()
    metadata: PartialMetadataRequest
}

export class UpdatePathRequest {
    @IsNumberString()
    id: string
}