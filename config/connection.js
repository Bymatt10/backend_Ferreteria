require('dotenv').config();
const Sequelize = require('sequelize');

module.exports = class Connection {
    constructor() {
        if (!process.env.DB_NAME) {
            throw new Error('Missing DB_NAME');
        }

        if (!process.env.DB_HOST) {
            throw new Error('Missing DB_HOST');
        }

        if (!process.env.DB_USER) {
            throw new Error('Missing DB_USER');
        }

        if (!process.env.DB_PASSWORD) {
            throw new Error('Missing DB_PASSWORD');
        }

        if (typeof Connection.instance === 'object') {
            return Connection.instance;
        }

        this.sequelize = new Sequelize(
            process.env.DB_NAME,
            process.env.DB_USER,
            process.env.DB_PASSWORD,
            {
                host: process.env.DB_HOST,
                dialect: 'mysql',
            },
        );

        Connection.instance = this;
        return this;
    }
};