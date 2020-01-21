const Pessoa = require('../models/Pessoa');

module.exports = {
    // Buscar Pessoa por Nome
    async index(request, response) {
        try {
            console.log(request.query);

            // Carregar dados
            const { nome } = request.query;

            const pessoas = await Pessoa.find({
                nome: new RegExp(nome, 'i')
            });

            return response.json(pessoas);
        } catch (e) {
            return response.json(e);
        }
    },
};