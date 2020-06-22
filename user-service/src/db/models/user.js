import { DataTypes, Model } from "sequelize";
import sequelize from './../connection';

export class Users extends Model {}

Users.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
    },
    first_name: {
        allowNull: false,
        length: 20,
        type: DataTypes.STRING
    },
    email: {
        allowNull: false,
        length: 50,
        type: DataTypes.STRING,
        unique: true
    },
    gender: {
        allowNull: false,
        length: 1,
        type: DataTypes.BOOLEAN,
        defaultValue: 1
    },
    marital_status: {
        allowNull: false,
        length: 1,
        type: DataTypes.BOOLEAN,
        defaultValue: 1
    },
    username: {
        allowNull: false,
        length: 30,
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        allowNull: false,
        length: 50,
        type: DataTypes.CHAR(64)
    }
}, {
    defaultValue: {
        rawAttributes: { exclude: ["password"] }
    },
    modelName: "users",
    sequelize
});




export class Session extends Model {}
Session.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
    },
    userId: {
        allowNull: false,
        references: {
            key: "id",
            model: "users"
        },
        type: DataTypes.UUID
    },
    expiredAt: {
        allowNull: false,
        length: 10,
        type: DataTypes.DATE
    }
}, {
    modelName: "session",
    paranoid: false,
    sequelize,
    updatedAt: false
});