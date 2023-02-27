export default interface MetadataEthDto {
    name: string
    description: string
    image: string
    animation_url: string
    external_url: string
    attributes: { [key: string]: any }
}