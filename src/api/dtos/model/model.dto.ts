import {Blockchain} from "../../../enums"
import Metadata from "../../../interfaces/metadata.interface"

export default class ModelDto {
    id: number
    chainId: Blockchain
    collectionAddress: string
    modelId: number
    metadata: Metadata
    createdAt: Date
    updatedAt: Date
}