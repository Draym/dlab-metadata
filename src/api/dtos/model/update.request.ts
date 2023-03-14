import {IsNumberString} from "class-validator"
import {PartialMetadataRequest} from "../token/metadata"

export class UpdateBodyRequest extends PartialMetadataRequest{
}

export class UpdatePathRequest {
    @IsNumberString()
    id: string
}