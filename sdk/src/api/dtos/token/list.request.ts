import {Blockchain} from "../../../enums"
import {PageRequest} from "@d-lab/common-kit"

export default interface ListRequest extends PageRequest {
    chainId: Blockchain | null
    collectionAddress: string | null
    modelId: string | null
    createdAfter: string | null
    createdBefore: string | null
}