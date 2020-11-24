'use strict'
require('dotenv').config()
const db = require('./models/')
const user = require('./controllers/user');

(async function main() {
  await db.checkConnection()
  await db.sequelize.sync({ force: false })

  //await user.create()
  //const loginResult = await user.login('me@tgarcia.com', 'khkkhk')
  //console.log(loginResult)
  // await user.deleteOne(1)
  // await user.updateOne(2)
  // const users = await user.findAll()
  // console.log(users)

  await db.sequelize.close()
})()