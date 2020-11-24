'use strict'
const { DataTypes } = require('sequelize')
const { sequelize } = require('.')
const bcrypt = require('bcryptjs')
const SALT_ROUNDS = 8

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.ENUM({
      values: ['1', '0']
    }),
    defaultValue: '1'
  }
}, {
  freezeTableName: true
})

User.beforeCreate(hashPassword)
User.beforeUpdate(hashPassword)

async function hashPassword(user) {
  const result = await bcrypt.hash(user.password, SALT_ROUNDS)
  user.password = result
}

User.prototype.comparePassword = function (candidatePassword) {
  const user = this

  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, user.password)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

module.exports = User