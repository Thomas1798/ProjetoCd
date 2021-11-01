'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const fornecedor = use('App/Models/Fornecedor')
/**
 * Resourceful controller for interacting with fornecedors
 */
class FornecedorController {
  /**
   * Show a list of all fornecedors.
   * GET fornecedors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new fornecedor.
   * GET fornecedors/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    
  }

  /**
   * Create/save a new fornecedor.
   * POST fornecedors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const fornecedorData = request.only([
      'nome',
      'endereco'
    ])
    try {
      const Fornecedor = await fornecedor.create(fornecedorData)

      return response.json({
        status: 'success',
        fornecedor: fornecedor
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
   * Display a single fornecedor.
   * GET fornecedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params,  response }) {
    try {
      return response.json(await fornecedor.findOrFail(params.id));
    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "fornecedor não encontrado"
      })
    }
  }

  /**
   * Render a form to update an existing fornecedor.
   * GET fornecedors/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update fornecedor details.
   * PUT or PATCH fornecedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const fornecedorData = request.only([
      'nome',
      'endereco'
    ])

    try {
      const fornecedorAtualiza = await fornecedor.findOrFail(params.id)
      fornecedorAtualiza.nome = fornecedorData.nome
      fornecedorAtualiza.endereco = fornecedorData.endereco
      
      

      await fornecedorAtualiza.save()

      return response.json({
        status: "success",
        message: "Fornecedor atualizado com sucesso!"
      })
    } catch (error) {
      return response.status(404).json({
      status: "error",
     message: "Não foi possível atualizar"
    })
    }
  }

  /**
   * Delete a fornecedor with id.
   * DELETE fornecedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const fornecedorDeleta = await fornecedor.findOrFail(params.id)
      await fornecedorDeleta.delete()

      return response.json({
        status: "success",
        message: "Fornecedor removido com sucesso!"
      })

    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Não foi possível deletar"
      })
    }
  }
}

module.exports = FornecedorController
