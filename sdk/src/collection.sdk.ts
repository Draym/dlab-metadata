import Sdk from "./sdk"
import {Auth, Http} from "@d-lab/common-kit"
import {Endpoint} from './enums';
import {
    CollectionResponse,
    CollectionsResponse,
    CreateRequest,
    GetRequest,
    ListRequest,
    UpdateBodyRequest,
    UpdatePathRequest
} from "./api/dtos/collection";
import {GetRequest as MetadataGetRequest, MetadataEthDto} from "./api/dtos/collection/metadata"

export default class CollectionSdk extends Sdk {
    private readonly apiKey?: string

    constructor(domain: string, apiKey?: string) {
        super(domain)
        this.apiKey = apiKey
    }

    create(body: CreateRequest): Promise<CollectionResponse> {
        return new Promise((resolve, reject) => {
            Http.post(this.domain, Endpoint.COLLECTION_Create,
                Auth.apiKey(this.apiKey),
                {body: body},
                (data: CollectionResponse) => {
                    resolve(data)
                },
                (error) => {
                    reject(error)
                })
        })
    }

    get(path: GetRequest): Promise<CollectionResponse> {
        return new Promise((resolve, reject) => {
            Http.get(this.domain, Endpoint.COLLECTION_Get,
                null,
                {path: {...path}},
                (data: CollectionResponse) => {
                    resolve(data)
                },
                (error) => {
                    reject(error)
                })
        })
    }

    list(query: ListRequest): Promise<CollectionsResponse> {
        return new Promise((resolve, reject) => {
            Http.get(this.domain, Endpoint.COLLECTION_List,
                null,
                {query: {...query}},
                (data: CollectionsResponse) => {
                    resolve(data)
                },
                (error) => {
                    reject(error)
                })
        })
    }

    update(path: UpdatePathRequest, body: UpdateBodyRequest): Promise<CollectionResponse> {
        return new Promise((resolve, reject) => {
            Http.put(this.domain, Endpoint.COLLECTION_Update,
                Auth.apiKey(this.apiKey),
                {path: {...path}, body: body},
                (data: CollectionResponse) => {
                    resolve(data)
                },
                (error) => {
                    reject(error)
                })
        })
    }

    metadataGet(path: MetadataGetRequest): Promise<MetadataEthDto> {
        return new Promise((resolve, reject) => {
            Http.get(this.domain, Endpoint.COLLECTION_METADATA_Get,
                null,
                {path: {...path}},
                (data: MetadataEthDto) => {
                    resolve(data)
                },
                (error) => {
                    reject(error)
                })
        })
    }
}