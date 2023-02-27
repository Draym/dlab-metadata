import {Blockchain} from "../enums"
import Metadata from "./metadata.interface"

export default interface Collection {
    id: number
    chainId: Blockchain
    address: string
    name: string
    metadata: Metadata
    createdAt: Date
    updatedAt: Date
}