'use strict'
const Sequelize = require('sequelize')
const connectionString = 'mysql://tallerBilly:temp@wootit2019.cstmcmlaz2y7.us-east-1.rds.amazonaws.com/dbo'

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