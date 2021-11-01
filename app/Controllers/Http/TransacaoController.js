'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const transacao = use('App/Models/Transacao')


/**
 * Resourceful controller for interacting with transacaos
 */
class TransacaoController {
  /**
   * Show a list of all transacaos.
   * GET transacaos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new transacao.
   * GET transacaos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new transacao.
   * POST transacaos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const transacaoData = request.only([
      'idCliente',
      'idFuncionario',
      'idCarro',
      'idFornecedor',
      'valorFinal'
    ])
    try {
      const Transacao = await transacao.create(transacaoData)

      return response.json({
        status: 'success',
        transacao: transacao
      })
    } catch (error) {
      return response.status(500).json({
        status: 'error',
        message: 'Ocorreu um erro inesperado',
        technical: error.error
      })
    }
  }

  /**
   * Display a single transacao.
   * GET transacaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params,  response }) {
    try {
      return response.json(await transacao.findOrFail(params.id));
    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Transacao não encontrado"
      })
    }
  }

  /**
   * Render a form to update an existing transacao.
   * GET transacaos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update transacao details.
   * PUT or PATCH transacaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const transacaoData = request.only([
      'idCliente',
      'idFuncionario',
      'idCarro',
      'idFornecedor',
      'valorFinal'
    ])

    try {
      const transacaoAtualiza = await transacao.findOrFail(params.id)
      transacaoAtualiza.idCliente = transacaoData.idCliente
      transacaoAtualiza.idFuncionario = transacaoData.idFuncionario
      transacaoAtualiza.idCarro = transacaoData.idCarro
      transacaoAtualiza.idFornecedor = transacaoData.idFornecedor
      transacaoAtualiza.valorFinal = transacaoData.valorFinal
      

      await transacaoAtualiza.save()

      return response.json({
        status: "success",
        message: "Transacao atualizado com sucesso!"
      })
    } catch (error) {
      return response.status(404).json({
      status: "error",
     message: "Não foi possível atualizar"
    })
    }
  }
  

  /**
   * Delete a transacao with id.
   * DELETE transacaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const transacaoDeleta = await transacao.findOrFail(params.id)
      await transacaoDeleta.delete()

      return response.json({
        status: "success",
        message: "Transacao removido com sucesso!"
      })

    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Não foi possível deletar"
      })
    }
  }
}

module.exports = TransacaoController
