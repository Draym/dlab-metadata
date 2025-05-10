import {IsEnum, IsNumber, IsObject, IsString} from "class-validator"
import {Blockchain} from "../../../enums"
import {MetadataRequest} from "../token/metadata"

export default class CreateRequest {
    @IsEnum(Blockchain)
    chainId: Blockchain
    @IsString()
    address: string
    @IsNumber()
    modelId: number
    @IsObject()
    metadata: MetadataRequest
}