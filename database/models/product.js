const { DataTypes } = require("sequelize");
const { config } = require("../../.sequelizerc");

 module.exports = (sequelize, DataTypes) => {
    const alias = "Product";
    const cols = {
        
        id: {
            type: DataTypes.INTEGER (100)
        },
        name: {
            type: DataTypes.STRING (300)
        },
        price: {
            type: DataTypes.DECIMAL (2)
        },
        image: {
            type: DataTypes.STRING (300)
        },
        category: {
            type: DataTypes.STRING (4)
        }

    };
    const config = {
        tableName: "products",
        timestamps: false,
    }

const product = sequelize.define(alias, cols, config);
    return product;
}