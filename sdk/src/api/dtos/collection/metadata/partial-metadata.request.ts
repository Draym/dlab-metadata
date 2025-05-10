import {IsNumber, IsString, Max, Min} from "class-validator"
import {SkipNull} from "@d-lab/api-kit"

export default class PartialMetadataRequest {
    @IsString()
    @SkipNull()
    name: string | undefined
    @IsString()
    @SkipNull()
    description: string | undefined
    @IsString()
    @SkipNull()
    imageUrl: string | undefined
    @IsString()
    @SkipNull()
    externalUrl: string | undefined
    @Min(100)
    @Max(10000)
    @IsNumber()
    @SkipNull()
    sellerFee: number | undefined
    @IsString()
    @SkipNull()
    feeRecipient: string | undefined
}