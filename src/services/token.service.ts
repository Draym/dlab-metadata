import {Filter, isNull, merge, Page, throwIfNull, toInt} from "@d-lab/api-kit"
import db from "../db/database"
import {MetadataToken, Token} from "../interfaces"
import {TokenModel} from "../models"
import {TokenId} from "../utils/decoder"
import Errors from "../utils/errors/Errors"
import modelService from "./model.service"
import {Blockchain} from "../enums"

class TokenService {

    async create(chainId: Blockchain, collectionAddress: string, tokenId: string, metadata: MetadataToken): Promise<TokenModel> {
        const ids = TokenId.decode(tokenId)

        return await db.Tokens.create({
            chainId: chainId,
            collectionAddress: collectionAddress,
            modelId: toInt(ids.modelId.toString())!,
            assetId: toInt(ids.assetId.toString())!,
            tokenId: tokenId,
            metadata: metadata
        })
    }

    async updateMetadata(chainId: Blockchain, collectionAddress: string, tokenId: string, partialMetadata: Partial<MetadataToken>): Promise<TokenModel> {
        const token = await this.findBy(chainId, collectionAddress, tokenId)

        if (isNull(token)) {
            const ids = TokenId.decode(tokenId)
            const modelId = toInt(ids.modelId.toString())!
            const model = await modelService.getBy(chainId, collectionAddress, modelId)
            const metadata = merge(model.metadata, partialMetadata)
            return this.create(chainId, collectionAddress, tokenId, metadata)
        } else {
            const metadata = merge(token!.metadata, partialMetadata)
            await token!.update({
                metadata: metadata
            })
            return token!
        }
    }

    async findBy(chainId: Blockchain, collectionAddress: string, tokenId: string): Promise<TokenModel | null> {
        const filter: Filter = new Filter()
        filter.equals({chainId, collectionAddress, tokenId})
        return db.Tokens.findOne(filter.get())
    }

    async getBy(chainId: Blockchain, collectionAddress: string, tokenId: string): Promise<TokenModel> {
        const token = await this.findBy(chainId, collectionAddress, tokenId)
        throwIfNull(token, Errors.NOT_FOUND_Token(`(${collectionAddress}, ${tokenId})`))
        return token!
    }

    async findAll(filter: Filter): Promise<Token[]> {
        return db.Tokens.findAll(filter.get())
    }
}

export default new TokenService()