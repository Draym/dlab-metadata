import {Filter, merge, Page, throwIfNull} from "@d-lab/api-kit"
import db from "../db/database"
import {MetadataToken, Model} from "../interfaces"
import {ModelModel} from "../models"
import Errors from "../utils/errors/Errors"
import {Blockchain} from "../enums"

class ModelService {

    async create(chainId: Blockchain, collectionAddress: string, modelId: number, metadata: MetadataToken): Promise<ModelModel> {
        return await db.Models.create({
            chainId: chainId,
            collectionAddress: collectionAddress,
            modelId: modelId,
            metadata: metadata
        })
    }

    async update(id: number, chainId: Blockchain, collectionAddress, partialMetadata: Partial<MetadataToken>): Promise<ModelModel> {
        const model = await this.get(id)
        const metadata = merge(model.metadata, partialMetadata)
        await model.update({
            chainId: chainId,
            collectionAddress: collectionAddress,
            metadata: metadata
        })
        return model
    }

    async findBy(chainId: Blockchain, collectionAddress: string, modelId: number): Promise<ModelModel | null> {
        const filter: Filter = new Filter()
        filter.equals({chainId, collectionAddress, modelId})
        return db.Models.findOne(filter.get())
    }

    async find(id: number): Promise<ModelModel | null> {
        return db.Models.findByPk(id)
    }

    async getBy(chainId: Blockchain, collectionAddress: string, modelId: number): Promise<ModelModel> {
        const model = await this.findBy(chainId, collectionAddress, modelId)
        throwIfNull(model, Errors.NOT_FOUND_Model(`(${collectionAddress}, ${modelId})`))
        return model!
    }

    async get(id: number): Promise<ModelModel> {
        const model = await this.find(id)
        throwIfNull(model, Errors.NOT_FOUND_Model(`${id}`))
        return model!
    }

    async findAll(filter: Filter): Promise<Model[]> {
        return db.Models.findAll(filter.get())
    }
}

export default new ModelService()