import Sdk from "./sdk"
import {Auth, Http} from "@d-lab/common-kit"
import {
    GetRequest as MetadataGetRequest, MetadataDto,
    MetadataEthDto,
    MetadataImxDto,
    UpdateBodyRequest as MetadataUpdateBodyRequest,
    UpdatePathRequest as MetadataUpdatePathRequest
} from "./api/dtos/token/metadata"
import {Endpoint} from "./enums"

export default class TokenSdk extends Sdk {
    private readonly apiKey?: string

    constructor(domain: string, apiKey?: string) {
        super(domain)
        this.apiKey = apiKey
    }

    getMetadata(path: MetadataGetRequest): Promise<MetadataEthDto | MetadataImxDto> {
        return new Promise((resolve, reject) => {
            Http.get(this.domain, Endpoint.TOKEN_METADATA_Get,
                null,
                {path: {...path}},
                (data: MetadataEthDto | MetadataImxDto) => {
                    resolve(data)
                },
                (error) => {
                    reject(error)
                })
        })
    }

    updateMetadata(path: MetadataUpdatePathRequest, body: MetadataUpdateBodyRequest): Promise<MetadataDto> {
        return new Promise((resolve, reject) => {
            Http.put(this.domain, Endpoint.TOKEN_METADATA_Update,
                Auth.apiKey(this.apiKey),
                {path: {...path}, body: body},
                (data: MetadataDto) => {
                    resolve(data)
                },
                (error) => {
                    reject(error)
                })
        })
    }
}