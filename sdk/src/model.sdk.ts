import Sdk from "./sdk"
import {Auth, Http} from '@d-lab/common-kit';
import {Endpoint} from './enums';
import {
    CreateRequest,
    GetRequest,
    ListRequest,
    ModelResponse,
    ModelsResponse,
    UpdateBodyRequest,
    UpdatePathRequest
} from './api/dtos/model';

export default class ModelSdk extends Sdk {
    private readonly apiKey?: string

    constructor(domain: string, apiKey?: string) {
        super(domain)
        this.apiKey = apiKey
    }

    async create(body: CreateRequest): Promise<ModelResponse> {
        return new Promise((resolve, reject) => {
            Http.post(this.domain, Endpoint.MODEL_Create,
                Auth.apiKey(this.apiKey),
                {body: body},
                (data: ModelResponse) => {
                    resolve(data)
                },
                (error) => {
                    reject(error)
                })
        })
    }

    async get(path: GetRequest): Promise<ModelResponse> {
        return new Promise((resolve, reject) => {
            Http.get(this.domain, Endpoint.MODEL_Get,
                null,
                {path: {...path}},
                (data: ModelResponse) => {
                    resolve(data)
                },
                (error) => {
                    reject(error)
                })
        })
    }

    async list(query: ListRequest): Promise<ModelsResponse> {
        return new Promise((resolve, reject) => {
            Http.get(this.domain, Endpoint.MODEL_List,
                null,
                {query: {...query}},
                (data: ModelsResponse) => {
                    resolve(data)
                },
                (error) => {
                    reject(error)
                })
        })
    }

    async update(path: UpdatePathRequest, body: UpdateBodyRequest): Promise<ModelResponse> {
        return new Promise((resolve, reject) => {
            Http.put(this.domain, Endpoint.MODEL_Update,
                Auth.apiKey(this.apiKey),
                {body: body},
                (data: ModelResponse) => {
                    resolve(data)
                },
                (error) => {
                    reject(error)
                })
        })
    }
}