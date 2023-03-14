import {Filter, merge, throwIfNull} from "@d-lab/api-kit"
import db from "../db/database"
import {Collection, MetadataContract} from "../interfaces"
import {CollectionModel} from "../models"
import Errors from "../utils/errors/Errors"
import {Blockchain} from "../enums"

class CollectionService {

    async create(chainId: Blockchain, identifier: string, address: string, metadata: MetadataContract): Promise<CollectionModel> {
        return await db.Collections.create({
            chainId: chainId,
            identifier: identifier,
            name: metadata.name,
            address: address,
            metadata: metadata
        })
    }

    async update(id: number, identifier: string, address: string, partialMetadata: Partial<MetadataContract>): Promise<CollectionModel> {
        const collection = await this.get(id)
        const metadata = merge(collection.metadata, partialMetadata)
        await collection.update({
            identifier: identifier,
            name: metadata.name,
            address: address,
            metadata: metadata
        })
        return collection
    }

    async findBy(filter: Filter): Promise<CollectionModel | null> {
        return db.Collections.findOne(filter.get())
    }

    async find(id: number): Promise<CollectionModel | null> {
        return db.Collections.findByPk(id)
    }

    async getBy(filter: Filter): Promise<CollectionModel> {
        const collection = await this.findBy(filter)
        throwIfNull(collection, Errors.NOT_FOUND_Collection(`(${filter.stringify()})`))
        return collection!
    }

    async get(id: number): Promise<CollectionModel> {
        const collection = await this.find(id)
        throwIfNull(collection, Errors.NOT_FOUND_Collection(`(${id})`))
        return collection!
    }

    async findAll(filter: Filter): Promise<Collection[]> {
        return db.Collections.findAll(filter.get())
    }
}

export default new CollectionService()