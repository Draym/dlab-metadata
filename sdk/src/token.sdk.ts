import Sdk from "./sdk"
import {Auth, Http} from "@d-lab/api-kit"
import Endpoint from "@/enums/endpoint.enum"
import {
    GetRequest as MetadataGetRequest, MetadataDto,
    MetadataImxDto,
    UpdateBodyRequest as MetadataUpdateBodyRequest,
    UpdatePathRequest as MetadataUpdatePathRequest
} from "@/dtos/token/metadata"
import MetadataEthDto from "../../src/api/dtos/token/metadata/metadata-eth.dto"

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
            Http.post(this.domain, Endpoint.TOKEN_METADATA_Update,
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