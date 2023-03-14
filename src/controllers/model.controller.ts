import {ModelApi} from "../api"
import {AuthBodyPathRequest, AuthBodyRequest, Filter, Page, PathRequest, QueryRequest} from "@d-lab/api-kit"
import {
    CreateRequest,
    GetRequest,
    ListRequest,
    ModelResponse,
    ModelsResponse,
    UpdateBodyRequest, UpdatePathRequest
} from "../api/dtos/model"
import modelService from "../services/model.service"

export default class ModelController implements ModelApi {
    async create(req: AuthBodyRequest<CreateRequest>): Promise<ModelResponse> {
        const payload = req.body
        const model = await modelService.create(payload.chainId, payload.address, payload.modelId, payload.metadata)
        return {model}
    }

    async get(req: PathRequest<GetRequest>): Promise<ModelResponse> {
        const params = req.params
        const model = await modelService.getById(Number.parseInt(params.id))
        return {model}
    }

    async list(req: QueryRequest<ListRequest>): Promise<ModelsResponse> {
        const query = req.query
        const page = Page.from(query)
        const filter = new Filter()
        filter.equals({chainId: query.chainId, collectionAddress: query.collectionAddress})
        const models = await modelService.findAll(filter, page)
        return {
            models,
            ...page.result(models)
        }
    }

    async update(req: AuthBodyPathRequest<UpdateBodyRequest, UpdatePathRequest>): Promise<ModelResponse> {
        const payload = req.body
        const params = req.params
        const model = await modelService.update(Number.parseInt(params.id), payload)
        return {model}
    }
}