'use strict'
const db = require('../models/')
const UserModel = db.user

async function create () {
  const user = {
    name: 'Username', 
    lastname: 'Lastname',
    email: 'me@user.com',
    password: 'abcd1234'
  }

  const { dataValues } = await UserModel.create(user)

  return dataValues
}

async function findAll() {
  const result = await UserModel.findAll()

  return result
}

async function login(loginEmail, loginPassword) {
  const user = await UserModel.findOne({ where: { email: loginEmail } })
  if (!user) return false
  const found = await user.comparePassword(loginPassword)

  return found
}

async function deleteOne(id) {
  const result = await UserModel.destroy({ where: { id } })

  return result
}

async function updateOne(id) {
  const body = {
    name: 'Updated', 
    lastname: 'User',
    email: 'me@newmail.com'
  }

  const result = await UserModel.update(body, { where: { id } })

  return result
}

module.exports = {
  create,
  findAll,
  deleteOne,
  updateOne,
  login
}