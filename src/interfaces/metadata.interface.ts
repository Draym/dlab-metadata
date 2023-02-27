export default interface Metadata {
    name: string
    description: string
    externalUrl: string
    imageUrl: string
    animationUrl: string
    properties: { [key: string]: any }
}