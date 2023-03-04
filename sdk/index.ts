import TokenSdk from "./src/token.sdk"
import Errors from "./src/utils/Errors"

class Client {
    private readonly domain: string
    public token: TokenSdk

    constructor(domain: string, apiKey?: string) {
        this.domain = domain
        this.token = new TokenSdk(domain, apiKey)
    }
}

export {
    Client,
    Errors
}

export * from "../src/enums/blockchain.enum"
export * from "../src/api/dtos/token/metadata"