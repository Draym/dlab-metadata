import {IsObject, IsString} from "class-validator"

export default class MetadataRequest {
    @IsString()
    name: string
    @IsString()
    description: string
    @IsString()
    imageUrl: string
    @IsString()
    animationUrl: string
    @IsObject()
    properties: { [key: string]: string | number | boolean | Date }
}