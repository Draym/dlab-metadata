export default interface PartialMetadataRequest {
    name?: string
    description?: string
    imageUrl?: string
    externalUrl?: string
    animationUrl?: string
    properties?: { [key: string]: string | number | boolean | Date | undefined }
}