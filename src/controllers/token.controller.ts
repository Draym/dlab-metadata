import {TokenApi} from "../api"
import {AuthBodyPathRequest, Filter, isNotNull, Page, PathRequest, QueryRequest, toOptDate} from "@d-lab/api-kit"
import {GetRequest, ListRequest, TokenResponse, TokensResponse} from "../api/dtos/token"
import {MetadataDto, MetadataEthDto, MetadataImxDto, UpdateBodyRequest, UpdatePathRequest} from "../api/dtos/token/metadata"
import tokenService from "../services/token.service"
import modelService from "../services/model.service"
import {TokenId} from "../utils/decoder"
import NftMetadata from "../utils/metadata/nft-metadata"

export default class TokenController implements TokenApi {
    async get(req: PathRequest<GetRequest>): Promise<TokenResponse> {
        const params = req.params
        const token = await tokenService.get(params.chainId, params.collectionAddress, params.tokenId)
        return {token}
    }

    async list(req: QueryRequest<ListRequest>): Promise<TokensResponse> {
        const query = req.query
        const filter = new Filter()
        filter.equals({chainId: query.chainId, modelId: query.modelId, collectionAddress: query.collectionAddress})
        filter.gt({createdAt: toOptDate(query.createdAfter)})
        filter.lt({createdAt: toOptDate(query.createdBefore)})
        const page = Page.from(query)
        const tokens = await tokenService.findAll(filter, page)
        return {
            tokens,
            ...page.result(tokens)
        }
    }

    async metadataGet(req: PathRequest<GetRequest>): Promise<MetadataEthDto | MetadataImxDto> {
        const params = req.params
        const token = await tokenService.find(params.chainId, params.collectionAddress, params.tokenId)
        if (isNotNull(token)) {
            return NftMetadata.for(params.chainId, token!.metadata)
        }
        const ids = TokenId.decode(params.tokenId)
        const model = await modelService.get(params.chainId, params.collectionAddress, Number.parseInt(ids.modelId.toString()))
        return NftMetadata.for(params.chainId, model.metadata)
    }

    async metadataUpdate(req: AuthBodyPathRequest<UpdateBodyRequest, UpdatePathRequest>): Promise<MetadataDto> {
        const payload = req.body
        const params = req.params
        const token = await tokenService.updateMetadata(params.chainId, params.collectionAddress, params.tokenId, payload)
        return token.metadata
    }
}