import {IsDateString, IsEnum, IsNumberString, IsString} from "class-validator"
import {PageRequest, SkipNull} from "@d-lab/api-kit"
import {Blockchain} from "../../../enums"

export default class ListRequest extends PageRequest {
    @IsEnum(Blockchain)
    @SkipNull()
    chainId: Blockchain | null
    @IsString()
    @SkipNull()
    collectionAddress: string | null
    @IsNumberString()
    @SkipNull()
    modelId: string | null
    @IsDateString()
    @SkipNull()
    createdAfter: string | null
    @IsDateString()
    @SkipNull()
    createdBefore: string | null
}