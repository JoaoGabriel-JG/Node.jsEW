const { readFile } = require('fs')
const { promisify } = require('util')   // Trabalhando com Promise

const readFileAsync = promisify(readFile)

// Outra forma de obter dados do JSON
// const dadosJson = require('./herois.json')

class dataBase {
    constructor() {
        this.NOME_ARQUIVO = 'herois.json'
    }
    async obterDadosArquivo() {
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())
    }
    escreverArquivo() {

    }
    async listar(id) {
        const dados = await this.obterDadosArquivo()
        const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true))
        return dadosFiltrados
    }
}

module.exports = new dataBase()