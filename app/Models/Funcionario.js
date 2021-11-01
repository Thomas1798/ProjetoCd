'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Funcionario extends Model {
    transacao(){
        return this.belongsTo('App/Models/Transacao')
    }
}

module.exports = Funcionario
