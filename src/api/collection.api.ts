import {AuthBodyPathRequest, AuthBodyRequest, PathRequest, QueryRequest} from "@d-lab/api-kit"
import {
    CreateRequest,
    GetRequest,
    ListRequest,
    CollectionResponse,
    CollectionsResponse,
    UpdateBodyRequest,
    UpdatePathRequest
} from "./dtos/collection"

export default interface CollectionApi {
    create(req: AuthBodyRequest<CreateRequest>): Promise<CollectionResponse>
    update(req: AuthBodyPathRequest<UpdateBodyRequest, UpdatePathRequest>): Promise<CollectionResponse>
    get(req: PathRequest<GetRequest>): Promise<CollectionResponse>
    list(req: QueryRequest<ListRequest>): Promise<CollectionsResponse>
}