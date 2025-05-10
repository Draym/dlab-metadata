import {IsEnum, IsObject, IsString} from "class-validator"
import {Blockchain} from "../../../enums"
import {MetadataRequest} from "./metadata"

export default class CreateRequest {
    @IsEnum(Blockchain)
    chainId: Blockchain
    @IsString()
    identifier: string
    @IsString()
    address: string
    @IsObject()
    metadata: MetadataRequest
}