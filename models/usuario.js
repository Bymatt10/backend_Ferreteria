const Sequelize = require('sequelize');
const Connection = require('../config/connection');

const connection = new Connection();
const Usuario = connection.sequelize.define(
    'cat_persona',
    {
        usr_codigo: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        usr_nombre: Sequelize.STRING,
        usr_clave: Sequelize.TEXT,
    },
    {
        tableName: 'cat_usuario',
        timestamps: false,
    },
);
module.exports = Usuario;
