import {Blockchain} from "../../../../enums"

export default interface GetRequest {
    chainId: Blockchain
    collection: string
    tokenId: string
}