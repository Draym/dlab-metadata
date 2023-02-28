export default interface MetadataToken {
    name: string
    description: string
    externalUrl: string
    imageUrl: string
    animationUrl: string
    properties: { [key: string]: any }
}