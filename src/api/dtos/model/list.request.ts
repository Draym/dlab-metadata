import {isNotEmpty, PageRequest} from "@d-lab/api-kit"
import {IsEnum, IsString, ValidateIf} from "class-validator"
import {Blockchain} from "../../../enums"

export default class ListRequest extends PageRequest {
    @IsEnum(Blockchain)
    @ValidateIf((object, value) => isNotEmpty(value))
    chainId: Blockchain | null
    @IsString()
    @ValidateIf((object, value) => isNotEmpty(value))
    collectionAddress: string | null
}