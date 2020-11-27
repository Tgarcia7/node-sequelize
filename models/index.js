'use strict'
const Sequelize = require('sequelize')
const Car = require('./car')
const User = require('./user')

const connectionString = process.env.DB_CONN
const sequelize = new Sequelize(connectionString, { logging: process.env.DEBUG })

const db = {}
db.sequelize = sequelize
db.car = Car(sequelize)
db.user = User(sequelize)

db.user.hasMany(db.car, { foreignKey: 'fk_user_id' })
db.car.belongsTo(db.user, { foreignKey: 'fk_user_id' })

db.checkConnection = async () => {
  try {
    await sequelize.authenticate()
  } catch (error) {
    console.error(`DB connection error: ${error}`)
    process.exit(0)
  }
}

module.exports = db