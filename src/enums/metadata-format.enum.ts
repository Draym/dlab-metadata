/**
 * EIP reference: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md
 * Enjin style is simalar to EIP but without typing: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1155.md#erc-1155-metadata-uri-json-schema
 * Flat style is simalar to Enjin but without properties encapsulation
 */
enum MetadataFormat {
    EIP = "eip",
    ENJIN = "enjin",
    FLAT = "flat"
}

export default MetadataFormat