const Sequelize = require('sequelize');
const Connection = require('../config/connection');

const connection = new Connection();
const Venta = connection.sequelize.define(
    'cat_venta',
    {
        venta_codigo: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        venta_num_factura: Sequelize.STRING,
        venta_descripcion: Sequelize.STRING,
        venta_descuento: Sequelize.DOUBLE,
        venta_impuesto: Sequelize.DOUBLE,
        venta_subtotal: Sequelize.DOUBLE,
        venta_total: Sequelize.DOUBLE,
        venta_fecha_registro: Sequelize.DATE,

    },
    {
        tableName: 'cat_venta',
        timestamps: false,
    },
);
module.exports = Venta;
