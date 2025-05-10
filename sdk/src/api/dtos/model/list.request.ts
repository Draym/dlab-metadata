import {PageRequest, SkipNull} from "@d-lab/api-kit"
import {IsEnum, IsString} from "class-validator"
import {Blockchain} from "../../../enums"

export default class ListRequest extends PageRequest {
    @IsEnum(Blockchain)
    @SkipNull()
    chainId: Blockchain | null
    @IsString()
    @SkipNull()
    collectionAddress: string | null
}