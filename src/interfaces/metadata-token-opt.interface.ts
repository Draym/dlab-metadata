export default interface MetadataTokenOpt {
    name?: string
    description?: string
    imageUrl?: string
    animationUrl?: string
    externalUrl?: string
    properties?: { [key: string]: string | number | boolean | Date | undefined }
}