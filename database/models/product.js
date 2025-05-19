const { DataTypes } = require("sequelize");
const { config } = require("../../.sequelizerc");

 module.exports = (sequelize, DataTypes) => {
    const alias = "Product";
    const cols = {
        
        id: {
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DECIMAL
        },
        image: {
            type: DataTypes.STRING
        },
        category: {
            type: DataTypes.STRING
        }

    };
    const config = {
        tableName: "products",
        timestamps: false,
    }

const product = Sequelize.define(alias, cols, config);
    return Product;
}