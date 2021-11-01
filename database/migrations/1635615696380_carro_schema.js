'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarroSchema extends Schema {
  up () {
    this.create('carros', (table) => {
      table.increments()
      table.string('modelo',120).notNullable()
      table.string('marca',120).notNullable()
      table.string('cor',45).notNullable()
      table.string('ano',10).notNullable()
      table.string('situacao',45).notNullable()
      table.float('valor').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('carros')
  }
}

module.exports = CarroSchema
