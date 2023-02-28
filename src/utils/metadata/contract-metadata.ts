import {MetadataContract} from "../../interfaces"
import Blockchain from "../../enums/blockchain.enum"
import {MetadataEthDto} from "../../api/dtos/collection/metadata"
export default class ContractMetadata {

    static for(chainId: Blockchain, metadata: MetadataContract): MetadataEthDto {
        switch (chainId) {
            case Blockchain.ETHEREUM:
                return this.forEthereum(metadata)
            default:
                return this.forEthereum(metadata)
        }
    }

    private static forEthereum(metadata: MetadataContract): MetadataEthDto {
        return {
            name: metadata.name,
            description: metadata.description,
            image: metadata.imageUrl,
            external_link: metadata.externalUrl,
            seller_fee_basis_points: metadata.sellerFee,
            fee_recipient: metadata.feeRecipient,
        }
    }
}