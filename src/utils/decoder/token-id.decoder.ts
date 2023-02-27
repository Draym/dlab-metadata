export interface Token {
    assetId: bigint
    modelId: bigint
    tokenId: bigint
}

export default class TokenId {
    private static bit32 = BigInt(32)

    public static decode(tokenId: bigint | string): Token {
        const value: bigint = BigInt(tokenId)
        return {
            modelId: value >> this.bit32,
            assetId: value - (value >> this.bit32 << this.bit32),
            tokenId: value
        }
    }

    public static encode(modelId: number, assetId: number): Token {
        const model = BigInt(modelId)
        const asset = BigInt(assetId)
        return {
            modelId: model,
            assetId: asset,
            tokenId: (model << (this.bit32)) + // model in 32 bits
                asset // asset in 32 bits
        }
    }
}