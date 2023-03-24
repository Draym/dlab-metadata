import {CollectionApi} from "../api"
import {AuthBodyPathRequest, AuthBodyRequest, eq, Filter, Page, PathRequest, QueryRequest} from "@d-lab/api-kit"
import {
    CollectionResponse,
    CollectionsResponse,
    CreateRequest,
    GetRequest,
    ListRequest,
    UpdateBodyRequest,
    UpdatePathRequest
} from "../api/dtos/collection"
import collectionService from "../services/collection.service"
import {GetRequest as MetadataGetRequest, MetadataEthDto} from "../api/dtos/collection/metadata"
import ContractMetadata from "../utils/metadata/contract-metadata"

export default class CollectionController implements CollectionApi {
    async create(req: AuthBodyRequest<CreateRequest>): Promise<CollectionResponse> {
        const payload = req.body
        const collection = await collectionService.create(payload.chainId, payload.identifier, payload.address, payload.metadata)
        return {collection}
    }

    async get(req: PathRequest<GetRequest>): Promise<CollectionResponse> {
        const params = req.params
        const collection = await collectionService.get(Number.parseInt(params.id))
        return {collection}
    }

    async list(req: QueryRequest<ListRequest>): Promise<CollectionsResponse> {
        const query = req.query
        const page = Page.from(query)
        const filter = new Filter()
        filter.equals({chainId: query.chainId, name: query.name})
        filter.paginate(page)
        const collections = await collectionService.findAll(filter)
        return {
            collections,
            ...page.result(collections)
        }
    }

    async update(req: AuthBodyPathRequest<UpdateBodyRequest, UpdatePathRequest>): Promise<CollectionResponse> {
        const payload = req.body
        const params = req.params
        const collection = await collectionService.update(Number.parseInt(params.id), payload.identifier, payload.address, payload.metadata)
        return {collection}
    }

    async metadataGet(req: PathRequest<MetadataGetRequest>): Promise<MetadataEthDto> {
        const params = req.params
        const filter = eq({chainId: params.chainId})
        if (params.collection.startsWith("0x")) {
            filter.equals({identifier: params.collection})
        } else {
            filter.equals({identifier: params.collection})
        }
        const collection = await collectionService.getBy(filter)
        return ContractMetadata.for(params.chainId, collection.metadata)
    }

}