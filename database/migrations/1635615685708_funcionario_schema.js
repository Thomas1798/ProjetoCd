'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FuncionarioSchema extends Schema {
  up () {
    this.create('funcionarios', (table) => {
      table.increments()
      table.string('nome',120).notNullable()
      table.float('salario').notNullable()
      table.string('cpf',11).notNullable()
      table.string('funcao',45).notNullable()
      table.string('endereco',120).notNullable()
      table.string('anoNascimento',10).notNullable()
      table.string('email',120).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('funcionarios')
  }
}

module.exports = FuncionarioSchema
