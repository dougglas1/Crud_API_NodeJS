const Pessoa = require('../models/Pessoa');

module.exports = {
    // Buscar Todas as Pessoas
    async index(request, response) {
        const pessoas = await Pessoa.find();
        //console.log(request.body);

        return response.json(pessoas);
    },

    // Inserir Pessoa
    async store(request, response) {
        //console.log(request.body);
        
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
    async update(request, response) {
        //console.log(request.body);

        // Carregar dados
        const { 
            _id,
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

        if (pessoa) {
            // carrega o objeto
            pessoa = await Pessoa.update({
            _id,
            nome,
            genero,
            cpf,
            rua,
            cep,
            bairro,
            telefone,
            situacao,
            data_atualizacao: new Date()
            })
        }

        return response.json(pessoa);
    },

    // Excluir Pessoa
    async destroy(request, response) {

        try {
            //console.log(request.body);

            // Carregar dados
            const { _id } = request.body;

            // verificar se já existe
            let pessoa = await Pessoa.findOne({ _id });

            if (pessoa) {
                // carrega o objeto
                pessoa = await Pessoa.remove({ _id })
            }

            return response.json(pessoa);
        } catch (e) {
            return response.json(e);
        }
    }, 
};