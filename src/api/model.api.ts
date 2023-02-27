import {AuthBodyPathRequest, AuthBodyRequest, PathRequest, QueryRequest} from "@d-lab/api-kit"
import {
    CreateRequest,
    GetRequest,
    ListRequest,
    ModelResponse,
    ModelsResponse,
    UpdateBodyRequest,
    UpdatePathRequest
} from "./dtos/model"

export default interface ModelApi {
    create(req: AuthBodyRequest<CreateRequest>): Promise<ModelResponse>
    update(req: AuthBodyPathRequest<UpdateBodyRequest, UpdatePathRequest>): Promise<ModelResponse>
    get(req: PathRequest<GetRequest>): Promise<ModelResponse>
    list(req: QueryRequest<ListRequest>): Promise<ModelsResponse>
}