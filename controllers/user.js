'use strict'
const UserModel = require('../models/user')

async function create () {
  const user = {
    name: 'Linus', 
    lastname: 'Torvals',
    email: 'me@linustorvals.com',
    password: 'khkkhk'
  }

  const { dataValues } = await UserModel.create(user)

  return dataValues
}

async function findAll() {
  const result = await UserModel.findAll()

  return result
}

async function deleteOne(id) {
  const result = await UserModel.destroy({ where: { id } })

  return result
}

async function updateOne(id) {
  const body = {
    name: 'Linus', 
    lastname: 'Torvals',
    email: 'me@linustorvals.com',
    password: 'fkahjdsfjsadfj'
  }

  const result = await UserModel.update(body, { where: { id } })

  return result
}

module.exports = {
  create,
  findAll,
  deleteOne,
  updateOne
}