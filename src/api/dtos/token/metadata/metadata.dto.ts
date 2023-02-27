export default interface MetadataDto {
    name: string
    description: string
    imageUrl: string
    animationUrl: string
    externalUrl: string
    properties: { [key: string]: any }
}