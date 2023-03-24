import {Blockchain} from "../../../../enums"
import PartialMetadataRequest from "./partial-metadata.request"

export interface UpdateBodyRequest extends PartialMetadataRequest {
}

export interface UpdatePathRequest {
    chainId: Blockchain
    collection: string
    tokenId: string
}