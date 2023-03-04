import TokenSdk from "./src/token.sdk"

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
}

export * from "./src/enums"
export * from "./src/api/dtos/token/metadata"