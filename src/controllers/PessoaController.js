const axios = require('axios');
const Pessoa = require('../models/Pessoa');

module.exports = {
    // Buscar Todas as Pessoas
    async index(request, response){

    },

    // Inserir Pessoa
    async store(request, response) {
        console.log('');
        console.log(request.body);
        
        // Carregar dados
        const { 
            nome,
            genero,
            cpf,
            rua,
            cep,
            bairro,
            telefone,
            situacao
        } = request.body;

        // verificar se já existe
        let pessoa = await Pessoa.findOne({ cpf });

        if (!pessoa) {
            // carrega o objeto
            pessoa = await Pessoa.create({
                nome,
                genero,
                cpf,
                rua,
                cep,
                bairro,
                telefone,
                situacao,
                data_cadastro: new Date(),
                data_atualizacao: new Date()
            })
        }

        return response.json(pessoa);
    },

    // Atualizar Pessoa
    async update(request, response){

    },

    // Excluir Pessoa
    async destroy(request, response){

    }, 
};