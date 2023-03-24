import {IsObject, IsString} from "class-validator"
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
    @IsString()
    @SkipNull()
    animationUrl: string | undefined
    @IsObject()
    @SkipNull()
    properties: { [key: string]: string | number | boolean | Date | undefined } | undefined
}