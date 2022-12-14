const { readFile, writeFile } = require('fs')
const { promisify } = require('util')   // Trabalhando com Promise
const [writeFileAsync, readFileAsync] = [
    promisify(writeFile),
    promisify(readFile),
]

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

    async escreverArquivo(dados) {
        await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true
    }

    async cadastrar(heroi) {
        const dados = await this.obterDadosArquivo()
        const id = heroi.id <= 2 ? heroi.id : Date.now()

        /*
            {
                nome: Batman,
                poder: Preparo 
            }
                JUNTAR OS OBJETOS
            {
                id: 1234567
            }

            {
                nome: Batman,
                poder: Preparo,
                id: 1 
            }
        */

       // Concatenar os Objetos
       const heroiComId = {
        id,
        ...heroi
       }
       const dadosFinal = [
        ...dados,
        heroiComId
       ]

       const resultado = await this.escreverArquivo(dadosFinal)
       return resultado
    }

    async listar(id) {
        const dados = await this.obterDadosArquivo()
        const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true))
        return dadosFiltrados
    }

    
    async atualizar(id, modificacoes) {
        const dados = await this.obterDadosArquivo()
        const indice = dados.findIndex(item => item.id === parseInt(id))
        if(indice === -1) {
            throw Error('O heroi informado não existe')
        }
        const atual = dados[ indice ]
        dados.splice(indice, 1)
        
        // Workaround para remover valores undefined do objeto
        const objAtualizado = JSON.parse(JSON.stringify(modificacoes))
        const dadoAtualizado = Object.assign({}, atual, objAtualizado)
        
        return await this.escreverArquivo([...dados, dadoAtualizado])
    }
    async remover(id) {
        if(!id) {
            return await this.escreverArquivo([])
        }
        const dados = await this.obterDadosArquivo()
        const indice = dados.findIndex(item => item.id === parseInt(id))
        if(indice === -1) {
            throw Error('O heroi informado não existe')
        }
        dados.splice(indice, 1)
        await this.escreverArquivo(dados)
        return true
    }
}

module.exports = new dataBase()