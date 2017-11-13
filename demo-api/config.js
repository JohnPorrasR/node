'use strict'

const debug = require('debug')('demo:api:db')

module.exports = {
    db: {
        database: process.env.DB_NAME || 'demo_node',
        username: process.env.DB_USER || 'johnporrasr',
        password: process.env.DB_PASS || 'S1st3m45',
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
        logging: s => debug(s),
        setup: true
    }
}