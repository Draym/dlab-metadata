import {Blockchain} from "../../../enums"
import {MetadataDto} from "./metadata"

export default interface TokenDto {
    id: number
    chainId: Blockchain
    collectionAddress: string
    modelId: number
    assetId: number
    tokenId: string
    metadata: MetadataDto
    createdAt: Date
    updatedAt: Date
}