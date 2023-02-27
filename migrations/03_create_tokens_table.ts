import {DataTypes, QueryInterface} from "sequelize"
import {Migration} from "../umzug"

export const up: Migration = async ({context: queryInterface}: { context: QueryInterface }) => {
    await queryInterface.createTable("tokens", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        chain_id: {
            allowNull: false,
            type: DataTypes.STRING
        },
        collection_address: {
            allowNull: false,
            type: DataTypes.STRING
        },
        model_id: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        asset_id: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        token_id: {
            allowNull: false,
            type: DataTypes.STRING
        },
        metadata: {
            allowNull: false,
            type: DataTypes.JSON,
        },
        created_at: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE
        }
    })
    await queryInterface.addConstraint("tokens", {
        fields: ["chain_id", "collection_address", "token_id"],
        type: "unique",
        name: "unique_chain_collection_token",
    });
}

export async function down({context: queryInterface}) {
    await queryInterface.dropTable("tokens")
}
