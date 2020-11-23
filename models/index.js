'use strict'
const Sequelize = require('sequelize')
const connectionString = process.env.DB_CONN
let sequelize = new Sequelize(connectionString, {
  logging: process.env.DEBUG
})

async function checkConnection() {
  try {
    await sequelize.authenticate()
  } catch (error) {
    console.error(`DB connection error: ${error}`)
    process.exit(0)
  }
}

module.exports = { 
  sequelize, 
  checkConnection 
}