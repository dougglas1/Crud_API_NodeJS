// Utilizar MongoDB
const mongoose = require('mongoose');

const PessoaSchema = new mongoose.Schema({
    nome: String,
    cpf: String,
    genero: String,
    rua: String,
    cep: String,
    bairro: String,
    telefone: String,
    situacao: String,
    data_cadastro: Date,
    data_atualizacao: Date,
});

module.exports = mongoose.model('Pessoa', PessoaSchema);
