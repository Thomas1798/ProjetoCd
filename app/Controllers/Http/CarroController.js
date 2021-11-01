'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const carro = use('App/Models/Carro')
/**
 * Resourceful controller for interacting with carros
 */
class CarroController {
  /**
   * Show a list of all carros.
   * GET carros
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new carro.
   * GET carros/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new carro.
   * POST carros
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const carroData = request.only([
      'modelo',
      'marca',
      'cor',
      'ano',
      'situacao',
      'valor'
    ])
    try {
      const Carro = await carro.create(carroData)

      return response.json({
        status: 'success',
        carro: carro
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
   * Display a single carro.
   * GET carros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params,  response }) {
    try {
      return response.json(await carro.findOrFail(params.id));
    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Carro não encontrado"
      })
    }
  }

  /**
   * Render a form to update an existing carro.
   * GET carros/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update carro details.
   * PUT or PATCH carros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const carroData = request.only([
      'modelo',
      'marca',
      'cor',
      'ano',
      'situacao',
      'valor'
    ])

    try {
      const carroAtualiza = await carro.findOrFail(params.id)
      carroAtualiza.modelo = carroData.modelo
      carroAtualiza.marca = carroData.marca
      carroAtualiza.cor = carroData.cor
      carroAtualiza.ano = carroData.ano
      carroAtualiza.situacao = carroData.situacao
      carroAtualiza.valor = carroData.valor
      

      await carroAtualiza.save()

      return response.json({
        status: "success",
        message: "Carro atualizado com sucesso!"
      })
    } catch (error) {
      return response.status(404).json({
      status: "error",
     message: "Não foi possível atualizar"
    })
    }
  }

  /**
   * Delete a carro with id.
   * DELETE carros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const carroDeleta = await carro.findOrFail(params.id)
      await carroDeleta.delete()

      return response.json({
        status: "success",
        message: "Carro removido com sucesso!"
      })

    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Não foi possível deletar"
      })
    }
  }
}

module.exports = CarroController
