import {Filter, merge, Page, throwIfNull} from "@d-lab/api-kit"
import db from "../db/database"
import {Metadata, Model, PartialMetadata} from "../interfaces"
import {ModelModel} from "../models"
import Errors from "../utils/errors/Errors"
import {Blockchain} from "../enums"

class ModelService {

    async create(chainId: Blockchain, collectionAddress: string, modelId: number, metadata: Metadata): Promise<ModelModel> {
        return await db.Models.create({
            chainId: chainId,
            collectionAddress: collectionAddress,
            modelId: modelId,
            metadata: metadata
        })
    }

    async update(id: number, partialMetadata: PartialMetadata): Promise<ModelModel> {
        const model = await this.getById(id)
        const metadata = merge(model.metadata, partialMetadata)
        await model.update({
            metadata: metadata
        })
        return model
    }

    async find(chainId: Blockchain, collectionAddress: string, modelId: number): Promise<ModelModel | null> {
        const filter: Filter = new Filter()
        filter.equals({chainId, collectionAddress, modelId})
        return db.Models.findOne(filter.get())
    }

    async findById(id: number): Promise<ModelModel | null> {
        return db.Models.findByPk(id)
    }

    async get(chainId: Blockchain, collectionAddress: string, modelId: number): Promise<ModelModel> {
        const model = await this.find(chainId, collectionAddress, modelId)
        throwIfNull(model, Errors.NOT_FOUND_Model(`(${collectionAddress}, ${modelId})`))
        return model!
    }

    async getById(id: number): Promise<ModelModel> {
        const model = await this.findById(id)
        throwIfNull(model, Errors.NOT_FOUND_Model(`${id}`))
        return model!
    }

    async all(): Promise<Model[]> {
        return db.Models.findAll()
    }

    async findAll(filter: Filter, page: Page): Promise<Model[]> {
        return db.Models.findAll(page.paginate(filter.get()))
    }
}

export default new ModelService()