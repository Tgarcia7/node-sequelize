'use strict'
const db = require('../models/')
const CarModel = db.car

async function create () {
  const car = {
    license_plate: 'ABC-123', 
    brand: 'Ford Mustand',
    model: '2020',
    fk_user_id: 1
  }

  const { dataValues } = await CarModel.create(car)

  return dataValues
}

module.exports = {
  create
}