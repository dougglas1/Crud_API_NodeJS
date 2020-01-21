const { Router } = require('express');

const PessoaController = require('./controllers/PessoaController');
const ConsultaController = require('./controllers/ConsultaPessoaController');

const routes = Router();

routes.get('/pessoa', PessoaController.index);
routes.post('/pessoa', PessoaController.store);
routes.put('/pessoa', PessoaController.update);
routes.delete('/pessoa', PessoaController.destroy);

routes.get('/consultaPessoa', ConsultaController.index);

module.exports = routes;