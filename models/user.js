'use strict'
const { DataTypes } = require('sequelize')
const { sequelize } = require('.')

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING
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
})

// `sequelize.define` also returns the model
//console.log(User === sequelize.models.User)

module.exports = User