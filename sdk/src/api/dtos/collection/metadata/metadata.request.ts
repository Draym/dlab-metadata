import {IsNumber, IsString, Max, Min} from "class-validator"

export default class MetadataRequest {
    @IsString()
    name: string
    @IsString()
    description: string
    @IsString()
    imageUrl: string
    @IsString()
    externalUrl: string
    // 100 indicates a 1% seller fee.
    @Min(100)
    @Max(10000)
    @IsNumber()
    sellerFee: number
    @IsString()
    feeRecipient: string
}