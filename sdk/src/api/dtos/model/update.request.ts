import {IsEnum, IsNumberString, IsObject, IsString} from "class-validator"
import {PartialMetadataRequest} from "../token/metadata"
import {Blockchain} from "../../../enums"

export class UpdateBodyRequest {
    @IsEnum(Blockchain)
    chainId: Blockchain
    @IsString()
    collectionAddress: string
    @IsObject()
    metadata: PartialMetadataRequest
}

export class UpdatePathRequest {
    @IsNumberString()
    id: string
}