import {MetadataToken} from "../../interfaces"
import Blockchain from "../../enums/blockchain.enum"
import {isDate, isNotNull, isNumber} from "@d-lab/common-kit"
import {MetadataEthDto, MetadataImxDto} from "../../api/dtos/token/metadata"
export default class NftMetadata {

    static for(chainId: Blockchain, metadata: MetadataToken, tokenId?: string): MetadataEthDto | MetadataImxDto {
        switch (chainId) {
            case Blockchain.ETHEREUM:
                return this.forEthereum(metadata, tokenId)
            case Blockchain.IMX:
                return this.forIMX(metadata)
            default:
                return this.forEthereum(metadata, tokenId)
        }
    }

    private static forEthereum(metadata: MetadataToken, tokenId?: string): MetadataEthDto {
        return {
            name: isNotNull(tokenId) ? `${metadata.name} #${tokenId}` : metadata.name,
            description: metadata.description,
            image: metadata.imageUrl,
            animation_url: metadata.animationUrl,
            external_url: metadata.externalUrl,
            attributes: Object.keys(metadata.properties).map(key => {
                const value = metadata.properties[key]
                if (isDate(value)) {
                    return {
                        display_type: "date",
                        trait_type: key,
                        value: new Date(metadata.properties[key]).getTime()
                    }
                }
                if (isNumber(value)) {
                    return {
                        display_type: "number",
                        trait_type: key,
                        value: metadata.properties[key]
                    }
                }
                return {
                    trait_type: key,
                    value: metadata.properties[key]
                }
            })
        }
    }

    private static forIMX(metadata: MetadataToken): MetadataImxDto {
        return {
            name: metadata.name,
            description: metadata.description,
            image_url: metadata.imageUrl,
            animation_url: metadata.animationUrl,
            ...metadata.properties
        }
    }
}