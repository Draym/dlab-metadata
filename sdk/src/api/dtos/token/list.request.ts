import {IsDateString, IsEnum, IsNumberString, IsString, ValidateIf} from "class-validator"
import {isNotEmpty, PageRequest} from "@d-lab/api-kit"
import {Blockchain} from "../../../enums"

export default class ListRequest extends PageRequest {
    @IsEnum(Blockchain)
    @ValidateIf((object, value) => isNotEmpty(value))
    chainId: Blockchain | null
    @IsString()
    @ValidateIf((object, value) => isNotEmpty(value))
    collectionAddress: string | null
    @IsNumberString()
    @ValidateIf((object, value) => isNotEmpty(value))
    modelId: string | null
    @IsDateString()
    @ValidateIf((object, value) => isNotEmpty(value))
    createdAfter: string | null
    @IsDateString()
    @ValidateIf((object, value) => isNotEmpty(value))
    createdBefore: string | null
}