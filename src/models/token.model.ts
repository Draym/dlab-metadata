import {Model as SeqModel, DataTypes, Sequelize, Optional} from "sequelize"
import {Token, Metadata} from "../interfaces"
import {Blockchain} from "../enums"

export type TokenCreationAttributes = Optional<Token, "id" | "createdAt" | "updatedAt">

export default class TokenModel extends SeqModel<Token, TokenCreationAttributes> implements Token {
    public id: number
    public chainId: Blockchain
    public collectionAddress: string
    public modelId: number
    public assetId: number
    public tokenId: string
    public metadata: Metadata
    public createdAt: Date
    public updatedAt: Date
}

export const init = (sequelize: Sequelize): typeof TokenModel => {
    // Init all models
    TokenModel.init(
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
            assetId: {
                allowNull: false,
                type: DataTypes.INTEGER,
                field: "asset_id"
            },
            tokenId: {
                allowNull: false,
                type: DataTypes.STRING,
                field: "token_id"
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
            modelName: "tokens",
            sequelize,
            timestamps: true
        },
    )
    return TokenModel
}
