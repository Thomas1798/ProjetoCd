'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

//Rotas Clientes
Route.post('/Cliente', 'ClienteController.store')
Route.get('/Cliente/:id','ClienteController.show')
Route.put('/Cliente/:id','ClienteController.update')
Route.delete('/Cliente/:id','ClienteController.destroy')


//Rotas Funcionarios
Route.post('/Funcionario', 'FuncionarioController.store')
Route.get('/Funcionario/:id','FuncionarioController.show')
Route.put('/Funcionario/:id','FuncionarioController.update')
Route.delete('/Funcionario/:id','FuncionarioController.destroy')

//Rotas Carros
Route.post('/Carro', 'CarroController.store')
Route.get('/Carro/:id','CarroController.show')
Route.put('/Carro/:id','CarroController.update')
Route.delete('/Carro/:id','CarroController.destroy')

//Rotas Fornecedor
Route.post('/Fornecedor', 'FornecedorController.store')
Route.get('/Fornecedor/:id','FornecedorController.show')
Route.put('/Fornecedor/:id','FornecedorController.update')
Route.delete('/Fornecedor/:id','FornecedorController.destroy')


Route.post('/Transacao', 'TransacaoController.store')
Route.get('/Transacao/:id','TransacaoController.show')
Route.put('/Transacao/:id','TransacaoController.update')
Route.delete('/Transacao/:id','TransacaoController.destroy')
