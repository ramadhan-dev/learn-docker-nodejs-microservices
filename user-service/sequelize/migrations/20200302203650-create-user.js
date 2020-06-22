module.exports.up = (queryInterface, dataTypes) => {
    return queryInterface.createTable(
        "users", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: dataTypes.UUID
            },
            first_name: {
                allowNull: false,
                length: 20,
                type: dataTypes.STRING
            },
            last_name: {
                allowNull: true,
                length: 20,
                type: dataTypes.STRING
            },
            email: {
                allowNull: false,
                length: 50,
                type: dataTypes.STRING,
                unique: true
            },
            gender: {
                allowNull: false,
                length: 1,
                type: dataTypes.BOOLEAN,
                defaultValue: 1
            },
            marital_status: {
                allowNull: false,
                length: 1,
                type: dataTypes.BOOLEAN,
                defaultValue: 1
            },
            day_of_birth: {
                allowNull: true,
                length: 10,
                type: dataTypes.DATE
            },
            username: {
                allowNull: false,
                length: 30,
                type: dataTypes.STRING,
                unique: true
            },
            password: {
                allowNull: false,
                length: 50,
                type: dataTypes.CHAR(64)
            },
            phone: {
                allowNull: true,
                length: 20,
                type: dataTypes.STRING
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
            DeletedAt: {
                allowNull: true,
                length: 10,
                type: dataTypes.DATE
            }
        }, {
            chartset: "utf8"
        }
    );
}


module.exports.down = queryInterface => queryInterface.dropTable('users')