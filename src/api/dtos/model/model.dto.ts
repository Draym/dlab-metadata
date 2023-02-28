import {Blockchain} from "../../../enums"
import {MetadataDto} from "../token/metadata"

export default class ModelDto {
    id: number
    chainId: Blockchain
    collectionAddress: string
    modelId: number
    metadata: MetadataDto
    createdAt: Date
    updatedAt: Date
}