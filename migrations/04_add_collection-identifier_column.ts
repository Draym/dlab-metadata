import {DataTypes, QueryInterface} from "sequelize"
import {Migration} from "../umzug"

export const up: Migration = async ({context: queryInterface}: { context: QueryInterface }) => {
    await queryInterface.addColumn("collections", "identifier", {
        allowNull: false,
        type: DataTypes.STRING
    })

    await queryInterface.addConstraint("collections", {
        fields: ["chain_id", "identifier"],
        type: "unique",
        name: "unique_chain_identifier",
    })
}

export async function down({context: queryInterface}: { context: QueryInterface }) {
    await queryInterface.removeColumn("collections", "identifier")
}
