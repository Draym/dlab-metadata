import {IsObject, IsString} from "class-validator"
import {SkipNull} from "@d-lab/api-kit"

export default class PartialMetadataRequest {
    @IsString()
    @SkipNull()
    name?: string
    @IsString()
    @SkipNull()
    description?: string
    @IsString()
    @SkipNull()
    imageUrl?: string
    @IsString()
    @SkipNull()
    externalUrl?: string
    @IsString()
    @SkipNull()
    animationUrl?: string
    @IsObject()
    @SkipNull()
    properties?: { [key: string]: string | number | boolean | Date | undefined }
}