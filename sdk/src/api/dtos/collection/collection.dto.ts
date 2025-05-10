import {Blockchain} from "../../../enums"

export default class CollectionDto {
    id: number
    chainId: Blockchain
    identifier: string
    address: string
    name: string
    createdAt: Date
    updatedAt: Date
}