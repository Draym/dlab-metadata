import {PageResponse} from "@d-lab/api-kit"
import CollectionDto from "./collection.dto"

export default interface CollectionsResponse extends PageResponse {
    collections: CollectionDto[]
}