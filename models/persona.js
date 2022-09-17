const Sequelize = require('sequelize');
const Connection = require('../config/connection');

const connection = new Connection();
const Persona = connection.sequelize.define(
    'cat_persona',
    {
        persona_codigo: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        persona_codigo_identificacion: Sequelize.STRING,
        persona_tipo_identificacion: Sequelize.STRING,
        persona_correo: Sequelize.STRING,
        persona_nombre: Sequelize.STRING,
        persona_telefono: Sequelize.INTEGER,
        persona_fecha_nacimiento: Sequelize.DATE,
        persona_genero: Sequelize.STRING,
        persona_direccion: Sequelize.STRING
    },
    {
        tableName: 'cat_persona',
        underscored: true,
        timestamps: false,
    },
);
module.exports = Persona;
