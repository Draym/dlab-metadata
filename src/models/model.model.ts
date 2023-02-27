import {Model as SeqModel, DataTypes, Sequelize, Optional} from "sequelize"
import {Model, Metadata} from "../interfaces"
import {Blockchain} from "../enums"

export type ModelCreationAttributes = Optional<Model, "id" | "createdAt" | "updatedAt">

export default class ModelModel extends SeqModel<Model, ModelCreationAttributes> implements Model {
    public id: number
    public chainId: Blockchain
    public collectionAddress: string
    public modelId: number
    public metadata: Metadata
    public createdAt: Date
    public updatedAt: Date
}

export const init = (sequelize: Sequelize): typeof ModelModel => {
    // Init all models
    ModelModel.init(
        {
            id: {
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            chainId: {
                allowNull: false,
                type: DataTypes.STRING,
                field: "chain_id"
            },
            collectionAddress: {
                allowNull: false,
                type: DataTypes.STRING,
                field: "collection_address"
            },
            modelId: {
                allowNull: false,
                type: DataTypes.INTEGER,
                field: "model_id"
            },
            metadata: {
                allowNull: false,
                type: DataTypes.JSON,
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
                field: "created_at"
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
                field: "updated_at"
            }
        },
        {
            underscored: true,
            modelName: "models",
            sequelize,
            timestamps: true
        },
    )
    return ModelModel
}
