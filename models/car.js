'use strict'
const { DataTypes } = require('sequelize')

const Car = (sequelize) => { 
  const Car = sequelize.define('Car', {
    license_plate: {
      type: DataTypes.STRING
    },
    brand: {
      type: DataTypes.STRING,
    },
    model: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true
  })

  return Car
}

module.exports = Car