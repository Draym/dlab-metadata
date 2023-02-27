import {Blockchain} from "../../../enums"

export default class CollectionDto {
    id: number
    chainId: Blockchain
    address: string
    name: string
    createdAt: Date
    updatedAt: Date
}