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
        const resultado = await database.listar(expected.id)
        ok(null, expected)
    })

    // it('Deve cadastrar um heroi, usando arquivos', async () => {
    //     const expected = DEFAULT_ITEM_CADASTRAR
    //     //
    //     ok(null, expected)
    // })
}) 
