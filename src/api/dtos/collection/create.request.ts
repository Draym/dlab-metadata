import {IsEnum, IsString} from "class-validator"
import {Blockchain} from "../../../enums"

export default class CreateRequest {
    @IsEnum(Blockchain)
    chainId: Blockchain
    @IsString()
    address: string
    @IsString()
    name: string
}