import {DataTypes, QueryInterface} from "sequelize"
import {Migration} from "../umzug"

export const up: Migration = async ({context: queryInterface}: { context: QueryInterface }) => {
    await queryInterface.createTable("collections", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        chain_id: {
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

    await queryInterface.addConstraint("collections", {
        fields: ["chain_id", "address"],
        type: "unique",
        name: "unique_collection",
    });
}

export async function down({context: queryInterface}) {
    await queryInterface.dropTable("collections")
}
