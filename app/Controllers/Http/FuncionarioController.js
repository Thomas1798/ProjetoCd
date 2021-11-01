'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const funcionario = use('App/Models/Funcionario')
/**
 * Resourceful controller for interacting with funcionarios
 */
class FuncionarioController {
  /**
   * Show a list of all funcionarios.
   * GET funcionarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new funcionario.
   * GET funcionarios/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new funcionario.
   * POST funcionarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const funcionarioData = request.only([
      'nome',
      'salario',
      'cpf',
      'funcao',
      'endereco',
      'anoNascimento',
      'email'
    ])
    try {
      const Funcionario = await funcionario.create(funcionarioData)

      return response.json({
        status: 'success',
        funcionario: funcionario
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
   * Display a single funcionario.
   * GET funcionarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, response }) {
    try {
      return response.json(await funcionario.findOrFail(params.id));
    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Funcionario não encontrado"
      })
    }
  }

  /**
   * Render a form to update an existing funcionario.
   * GET funcionarios/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update funcionario details.
   * PUT or PATCH funcionarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const funcionarioData = request.only([
      'nome',
      'salario',
      'cpf',
      'funcao',
      'endereco',
      'anoNascimento',
      'email'
    ])

    try {
      const funcionarioAtualiza = await funcionario.findOrFail(params.id)
      funcionarioAtualiza.nome = funcionarioData.nome
      funcionarioAtualiza.salario = funcionarioData.salario
      funcionarioAtualiza.cpf = funcionarioData.cpf
      funcionarioAtualiza.funcao = funcionarioData.funcao
      funcionarioAtualiza.endereco = funcionarioData.endereco
      funcionarioAtualiza.anoNascimento = funcionarioData.anoNascimento
      funcionarioAtualiza.email = funcionarioData.email
      

      await funcionarioAtualiza.save()

      return response.json({
        status: "success",
        message: "Funcionario atualizado com sucesso!"
      })
    } catch (error) {
      return response.status(404).json({
      status: "error",
     message: "Não foi possível atualizar"
    })
    }
  }

  /**
   * Delete a funcionario with id.
   * DELETE funcionarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const funcionarioDeleta = await funcionario.findOrFail(params.id)
      await funcionarioDeleta.delete()

      return response.json({
        status: "success",
        message: "Funcionario removido com sucesso!"
      })

    } catch (error) {
      return response.status(404).json({
        status: "error",
        message: "Não foi possível deletar"
      })
    }
  }
}

module.exports = FuncionarioController
