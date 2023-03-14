import {IsEnum, IsString} from "class-validator"
import {Blockchain} from "../../../../enums"
import PartialMetadataRequest from "./partial-metadata.request"

export class UpdateBodyRequest extends PartialMetadataRequest {
}

export class UpdatePathRequest {
    @IsEnum(Blockchain)
    chainId: Blockchain
    @IsString()
    collection: string
    @IsString()
    tokenId: string
}