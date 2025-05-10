import TokenSdk from "./src/token.sdk"
import ModelSdk from './src/model.sdk';
import CollectionSdk from './src/collection.sdk';

class Client {
    private readonly domain: string
    public token: TokenSdk
    public model: ModelSdk
    public collection: CollectionSdk

    constructor(domain: string, apiKey?: string) {
        this.domain = domain
        this.token = new TokenSdk(domain, apiKey)
        this.model = new ModelSdk(domain, apiKey)
        this.collection = new CollectionSdk(domain, apiKey)
    }
}

export {
    Client,
}

export * from "./src/enums"
import * as Token from "./src/api/dtos/token"
import * as TokenMetadata from "./src/api/dtos/token/metadata"
import * as Model from "./src/api/dtos/model"
import * as Collection from "./src/api/dtos/collection"
export { Token, TokenMetadata, Model, Collection }