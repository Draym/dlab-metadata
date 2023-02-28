import MetadataToken from "./metadata-token.interface"
import {Blockchain} from "../enums"

export default interface Token {
    id: number
    chainId: Blockchain
    collectionAddress: string
    modelId: number
    assetId: number
    tokenId: string
    metadata: MetadataToken
    createdAt: Date
    updatedAt: Date
}