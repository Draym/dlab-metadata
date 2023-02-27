import Metadata from "./metadata.interface"
import {Blockchain} from "../enums"

export default interface Model {
    id: number
    chainId: Blockchain
    collectionAddress: string
    modelId: number
    metadata: Metadata
    createdAt: Date
    updatedAt: Date
}