'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FornecedorSchema extends Schema {
  up () {
    this.create('fornecedors', (table) => {
      table.increments()
      table.string('nome',120).notNullable()
      table.string('endereco',120).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('fornecedors')
  }
}

module.exports = FornecedorSchema
