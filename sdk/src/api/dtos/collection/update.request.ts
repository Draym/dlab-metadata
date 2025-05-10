import {IsNumberString, IsObject, IsString} from "class-validator"
import {PartialMetadataRequest} from "./metadata"

export class UpdateBodyRequest {
    @IsString()
    identifier: string
    @IsString()
    address: string
    @IsObject()
    metadata: PartialMetadataRequest
}

export class UpdatePathRequest {
    @IsNumberString()
    id: string
}