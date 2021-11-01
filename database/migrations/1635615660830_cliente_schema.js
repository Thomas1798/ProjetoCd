'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClienteSchema extends Schema {
  up () {
    this.create('clientes', (table) => {
      table.increments()
      table.string('nome',120).notNullable()
      table.string('cpf',11).notNullable()
      table.string('endereco',120).notNullable()
      table.string('anoNascimento',10).notNullable()
      table.string('email',120).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('clientes')
  }
}

module.exports = ClienteSchema
