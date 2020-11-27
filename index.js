'use strict'
require('dotenv').config()
const db = require('./models/')
const user = require('./controllers/user')
const car = require('./controllers/car');

(async function main() {
  await db.checkConnection()
  await db.sequelize.sync({ force: true })

  await user.create()
  await user.create()
  await user.login('me@user.com', 'abcd1234')
  await user.deleteOne(2)
  await user.updateOne(1)
  const users = await user.findAll()
  console.log(users)

  await car.create()

  await db.sequelize.close()
})()