const Sequelize = require('sequelize');
const Connection = require('../config/connection');

const connection = new Connection();
const forma_Pago = connection.sequelize.define(
    'cat_forma_pago',
    {
        mp_codigo: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        mp_nombre: Sequelize.STRING
    },
    {
        tableName: 'cat_forma_pago',
        timestamps: false,
    },
);
module.exports = forma_Pago;
