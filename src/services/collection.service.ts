import {Filter, merge, Page, throwIfNull} from "@d-lab/api-kit"
import db from "../db/database"
import {Collection, MetadataContract, MetadataContractOpt} from "../interfaces"
import {CollectionModel} from "../models"
import Errors from "../utils/errors/Errors"
import {Blockchain} from "../enums"

class CollectionService {

    async create(chainId: Blockchain, address: string, metadata: MetadataContract): Promise<CollectionModel> {
        return await db.Collections.create({
            chainId: chainId,
            name: metadata.name,
            address: address,
            metadata: metadata
        })
    }

    async update(id: number, partialMetadata: MetadataContractOpt): Promise<CollectionModel> {
        const collection = await this.getById(id)
        await collection.update({
            name: partialMetadata.name,
            metadata: merge(collection.metadata, partialMetadata)
        })
        return collection
    }

    async find(chainId: Blockchain, address: string): Promise<CollectionModel | null> {
        const filter: Filter = new Filter()
        filter.equals({address, chainId})
        return db.Collections.findOne(filter.get())
    }

    async findById(id: number): Promise<CollectionModel | null> {
        return db.Collections.findByPk(id)
    }

    async get(chainId: Blockchain, address: string): Promise<CollectionModel> {
        const collection = await this.find(chainId, address)
        throwIfNull(collection, Errors.NOT_FOUND_Collection(`(${address})`))
        return collection!
    }

    async getById(id: number): Promise<CollectionModel> {
        const collection = await this.findById(id)
        throwIfNull(collection, Errors.NOT_FOUND_Collection(`(${id})`))
        return collection!
    }

    async all(): Promise<Collection[]> {
        return db.Collections.findAll()
    }

    async findAll(filter: Filter, page: Page): Promise<Collection[]> {
        return db.Collections.findAll(page.paginate(filter.get()))
    }
}

export default new CollectionService()