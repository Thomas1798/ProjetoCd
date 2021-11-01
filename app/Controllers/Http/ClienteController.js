'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const cliente = use('App/Models/Cliente')

/**
 * Resourceful controller for interacting with clientes
 */
class ClienteController {
  /**
   * Show a list of all clientes.
   * GET clientes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new cliente.
   * GET clientes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new cliente.
   * POST clientes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const clienteData = request.only([
      'nome',
      'cpf',
      'endereco',
      'anoNascimento',
      'email'
    ])
    try {
      const Cliente = await cliente.create(clienteData)

      return response.json({
        status: 'success',
        cliente: cliente
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
   * Display a single cliente.
   * GET clientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params,  response }) {
    try {
      return response.json(await cliente.findOrFail(params.id));
    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Cliente não encontrado"
      })
    }
  }

  /**
   * Render a form to update an existing cliente.
   * GET clientes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update cliente details.
   * PUT or PATCH clientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const clienteData = request.only([
      'nome',
      'cpf',
      'endereco',
      'anoNascimento',
      'email'
    ])

    try {
      const clienteAtualiza = await cliente.findOrFail(params.id)
      clienteAtualiza.nome = clienteData.nome
      clienteAtualiza.cpf = clienteData.cpf
      clienteAtualiza.endereco = clienteData.endereco
      clienteAtualiza.anoNascimento = clienteData.anoNascimento
      clienteAtualiza.email = clienteData.email
      

      await clienteAtualiza.save()

      return response.json({
        status: "success",
        message: "Cliente atualizado com sucesso!"
      })
    } catch (error) {
      return response.status(404).json({
      status: "error",
     message: "Não foi possível atualizar"
    })
    }
  }

  /**
   * Delete a cliente with id.
   * DELETE clientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const clienteDeleta = await cliente.findOrFail(params.id)
      await clienteDeleta.delete()

      return response.json({
        status: "success",
        message: "Cliente removido com sucesso!"
      })

    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Não foi possível deletar"
      })
    }
  }
}

module.exports = ClienteController
