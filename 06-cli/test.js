const { deepEqual, ok } = require('assert')
const database = require('./database')
const dataBase = require('./database')

const DEFAULT_ITEM_CADASTRAR = { 
    nome: 'Batman', 
    poder: 'Preparo', 
    id: 1 
}

describe('Suite de manipulação de Herois', () => {  // Suite de teste 
    it('Deve pesquisar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const [ resultado ] = await database.listar(expected.id)    // Como pegar só a primeira posição do Array DESTRUCTURING []
        const posicaoUm = resultado[0]    // Como pegar só a primeira posição do Array

        deepEqual(resultado, expected)      // deepEqual: completamente igual
    })

    // it('Deve cadastrar um heroi, usando arquivos', async () => {
    //     const expected = DEFAULT_ITEM_CADASTRAR
    //     //
    //     ok(null, expected)
    // })
}) 
