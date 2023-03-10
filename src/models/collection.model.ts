import {Model, DataTypes, Sequelize, Optional} from "sequelize"
import {Collection, MetadataContract} from "../interfaces"
import {Blockchain} from "../enums"
export type CollectionCreationAttributes = Optional<Collection, "id" | "createdAt" | "updatedAt">

export default class CollectionModel extends Model<Collection, CollectionCreationAttributes> implements Collection {
    public id: number
    public chainId: Blockchain
    public identifier: string
    public address: string
    public name: string
    metadata: MetadataContract
    public createdAt: Date
    public updatedAt: Date
}

export const init = (sequelize: Sequelize): typeof CollectionModel => {
    // Init all models
    CollectionModel.init(
        {
            id: {
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            chainId: {
                allowNull: false,
                type: DataTypes.STRING
            },
            identifier: {
                allowNull: false,
                type: DataTypes.STRING
            },
            address: {
                allowNull: false,
                type: DataTypes.STRING
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING
            },
            metadata: {
                allowNull: false,
                type: DataTypes.JSON
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE
            }
        },
        {
            underscored: true,
            modelName: "collections",
            sequelize,
            timestamps: true
        },
    )

    return CollectionModel
}
