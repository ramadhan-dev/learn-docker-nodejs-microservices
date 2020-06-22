module.exports.up = (queryInterface, dataTypes) => {
    return queryInterface.createTable(
        "userSession", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: dataTypes.UUID
            },
            userId: {
                allowNull: false,
                references: {
                    key: "id",
                    model: "users"
                },
                type: dataTypes.UUID
            },
            expiredAt: {
                allowNull: false,
                length: 10,
                type: dataTypes.DATE
            },
            createdAt: {
                allowNull: false,
                length: 10,
                type: dataTypes.DATE
            },
            updatedAt: {
                allowNull: true,
                length: 10,
                type: dataTypes.DATE
            },
            deletedAt: {
                allowNull: true,
                length: 10,
                type: dataTypes.DATE
            }
        }, {
            chartset: "utf8"
        }
    );
};

module.exports.down = queryInterface => queryInterface.dropTable("userSession");