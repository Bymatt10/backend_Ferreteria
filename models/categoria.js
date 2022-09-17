const Sequelize = require('sequelize');
const Connection = require('../config/connection');

const connection = new Connection();
const categoria = connection.sequelize.define(
    'cat_categoria',
    {
        categoria_codigo: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        categoria_nombre: Sequelize.STRING
    },
    {
        tableName: 'cat_categoria',
        timestamps: false,
    },
);
module.exports = categoria;
