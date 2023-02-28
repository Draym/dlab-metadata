import {MetadataToken} from "../../interfaces"
import Blockchain from "../../enums/blockchain.enum"
import {isDate, isNumber} from "@d-lab/api-kit"
import {MetadataEthDto, MetadataImxDto} from "../../api/dtos/token/metadata"
export default class NftMetadata {

    static for(chainId: Blockchain, metadata: MetadataToken): MetadataEthDto | MetadataImxDto {
        switch (chainId) {
            case Blockchain.ETHEREUM:
                return this.forEthereum(metadata)
            case Blockchain.IMX:
                return this.forIMX(metadata)
            default:
                return this.forEthereum(metadata)
        }
    }

    private static forEthereum(metadata: MetadataToken): MetadataEthDto {
        return {
            name: metadata.name,
            description: metadata.description,
            image: metadata.imageUrl,
            animation_url: metadata.animationUrl,
            external_url: metadata.externalUrl,
            attributes: metadata.properties.keys().map(key => {
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