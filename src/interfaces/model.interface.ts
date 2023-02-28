import {Blockchain} from "../enums"
import MetadataToken from "./metadata-token.interface"

export default interface Model {
    id: number
    chainId: Blockchain
    collectionAddress: string
    modelId: number
    metadata: MetadataToken
    createdAt: Date
    updatedAt: Date
}