import {TokenApi} from "../api"
import {AuthBodyPathRequest, eq, Filter, isNotNull, logger, Page, PathRequest, QueryRequest, toOptDate} from "@d-lab/api-kit"
import {GetRequest, ListRequest, TokenResponse, TokensResponse} from "../api/dtos/token"
import {MetadataDto, MetadataEthDto, MetadataImxDto, UpdateBodyRequest, UpdatePathRequest} from "../api/dtos/token/metadata"
import tokenService from "../services/token.service"
import modelService from "../services/model.service"
import {TokenId} from "../utils/decoder"
import NftMetadata from "../utils/metadata/nft-metadata"
import collectionService from "../services/collection.service"
import {col} from "sequelize"

export default class TokenController implements TokenApi {
    async get(req: PathRequest<GetRequest>): Promise<TokenResponse> {
        const params = req.params
        let collectionAddress = params.collection
        if (!collectionAddress.startsWith("0x")) {
            const collection = await collectionService.getBy(eq({chainId: params.chainId, identifier: params.collection}))
            collectionAddress = collection?.address
        }
        const token = await tokenService.getBy(params.chainId, collectionAddress, params.tokenId)
        return {token}
    }

    async list(req: QueryRequest<ListRequest>): Promise<TokensResponse> {
        const query = req.query
        const page = Page.from(query)
        const filter = new Filter()
        filter.equals({chainId: query.chainId, modelId: query.modelId, collectionAddress: query.collectionAddress})
        filter.gt({createdAt: toOptDate(query.createdAfter)})
        filter.lt({createdAt: toOptDate(query.createdBefore)})
        filter.paginate(page)
        const tokens = await tokenService.findAll(filter)
        return {
            tokens,
            ...page.result(tokens)
        }
    }

    async metadataGet(req: PathRequest<GetRequest>): Promise<MetadataEthDto | MetadataImxDto> {
        const params = req.params
        let collectionAddress = params.collection
        if (!collectionAddress.startsWith("0x")) {
            const collection = await collectionService.getBy(eq({chainId: params.chainId, identifier: params.collection}))
            collectionAddress = collection?.address
        }
        const token = await tokenService.findBy(params.chainId, collectionAddress, params.tokenId)
        if (isNotNull(token)) {
            return NftMetadata.for(params.chainId, token!.metadata)
        }
        const ids = TokenId.decode(params.tokenId)
        const model = await modelService.getBy(params.chainId, collectionAddress, Number.parseInt(ids.modelId.toString()))
        return NftMetadata.for(params.chainId, model.metadata, params.tokenId)
    }

    async metadataUpdate(req: AuthBodyPathRequest<UpdateBodyRequest, UpdatePathRequest>): Promise<MetadataDto> {
        const payload = req.body
        const params = req.params
        let collectionAddress = params.collection
        if (!collectionAddress.startsWith("0x")) {
            const collection = await collectionService.getBy(eq({chainId: params.chainId, identifier: params.collection}))
            collectionAddress = collection?.address
        }
        const token = await tokenService.updateMetadata(params.chainId, collectionAddress, params.tokenId, payload)
        return token.metadata
    }
}