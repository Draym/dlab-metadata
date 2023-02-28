import {Blockchain} from "../enums"
import MetadataContract from "./metadata-contract.interface"

export default interface Collection {
    id: number
    chainId: Blockchain
    address: string
    name: string
    metadata: MetadataContract
    createdAt: Date
    updatedAt: Date
}