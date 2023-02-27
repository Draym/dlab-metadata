import {IsEnum, IsString, ValidateIf} from "class-validator"
import {isNotEmpty, PageRequest} from "@d-lab/api-kit"
import {Blockchain} from "../../../enums"

export default class GetRequest {
    @IsEnum(Blockchain)
    chainId: Blockchain
    @IsString()
    collectionAddress: string
    @IsString()
    tokenId: string
}