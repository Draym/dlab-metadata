import {IsNumber, IsString, Max, Min, ValidateIf} from "class-validator"
import {isNotEmpty} from "@d-lab/api-kit"

export default class PartialMetadataRequest {
    @IsString()
    @ValidateIf((object, value) => isNotEmpty(value))
    name: string | undefined
    @IsString()
    @ValidateIf((object, value) => isNotEmpty(value))
    description: string | undefined
    @IsString()
    @ValidateIf((object, value) => isNotEmpty(value))
    imageUrl: string | undefined
    @IsString()
    @ValidateIf((object, value) => isNotEmpty(value))
    externalUrl: string | undefined
    @Min(100)
    @Max(10000)
    @IsNumber()
    @ValidateIf((object, value) => isNotEmpty(value))
    sellerFee: number | undefined
    @IsString()
    @ValidateIf((object, value) => isNotEmpty(value))
    feeRecipient: string | undefined
}