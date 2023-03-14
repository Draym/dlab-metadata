import {IsEnum, IsString} from "class-validator"
import {Blockchain} from "../../../enums"

export default class GetRequest {
    @IsEnum(Blockchain)
    chainId: Blockchain
    @IsString()
    collection: string
    @IsString()
    tokenId: string
}