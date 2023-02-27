import {IsObject, IsString, ValidateIf} from "class-validator"
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
    @IsString()
    @ValidateIf((object, value) => isNotEmpty(value))
    animationUrl: string | undefined
    @IsObject()
    @ValidateIf((object, value) => isNotEmpty(value))
    properties: { [key: string]: string | number | boolean | Date | undefined } | undefined
}