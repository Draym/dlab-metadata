export default interface PartialMetadataRequest {
    name: string | undefined
    description: string | undefined
    imageUrl: string | undefined
    externalUrl: string | undefined
    animationUrl: string | undefined
    properties: { [key: string]: string | number | boolean | Date | undefined } | undefined
}