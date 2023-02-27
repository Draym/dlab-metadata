export default interface PartialMetadata {
    name: string | undefined
    description: string | undefined
    imageUrl: string | undefined
    animationUrl: string | undefined
    properties: { [key: string]: string | number | boolean | Date | undefined } | undefined
}