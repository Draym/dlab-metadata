import {AuthBodyPathRequest, PathRequest, QueryRequest} from "@d-lab/api-kit"
import {GetRequest, ListRequest, TokenResponse, TokensResponse} from "./dtos/token"
import MetadataEthDto from "./dtos/token/metadata/metadata-eth.dto"
import {
    UpdateBodyRequest as MetadataUpdateBodyRequest,
    UpdatePathRequest as MetadataUpdatePathRequest,
    GetRequest as MetadataGetRequest,
    MetadataImxDto, MetadataDto
} from "./dtos/token/metadata"

export default interface TokenApi {
    metadataUpdate(req: AuthBodyPathRequest<MetadataUpdateBodyRequest, MetadataUpdatePathRequest>): Promise<MetadataDto>
    metadataGet(req: PathRequest<MetadataGetRequest>): Promise<MetadataEthDto | MetadataImxDto>
    get(req: PathRequest<GetRequest>): Promise<TokenResponse>
    list(req: QueryRequest<ListRequest>): Promise<TokensResponse>
}