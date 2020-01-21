const { Router } = require('express');

const PessoaController = require('./controllers/PessoaController');

const routes = Router();

//routes.get('/pessoa', PessoaController.index);
//routes.get('/pessoa', PessoaController.show);
routes.post('/pessoa', PessoaController.store);
//routes.put('/pessoa', PessoaController.update);
//routes.delete('/pessoa', PessoaController.destroy);

module.exports = routes;