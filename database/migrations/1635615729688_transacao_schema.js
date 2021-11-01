'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransacaoSchema extends Schema {
  up () {
    this.create('transacaos', (table) => {
      table.increments()
      table.integer('idCliente').notNullable()
      table.integer('idFuncionario').notNullable()
      table.integer('idCarro').notNullable()
      table.integer('idFornecedor').notNullable()
      table.float('valorFinal').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('transacaos')
  }
}

module.exports = TransacaoSchema
