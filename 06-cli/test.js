const { deepEqual, ok } = require('assert')
const dataBase = require('./database')

const DEFAULT_ITEM_CADASTRAR = { 
    nome: 'Batman', 
    poder: 'Preparo', 
    id: 1 
}
const DEFAULT_ITEM_ATUALIZAR = {
    nome: 'Asa Noturna',
    poder: 'Humano Maneiro',
    id: 2
}

describe('Suite de manipulação de Herois', () => {  // Suite de teste 
    before (async() => {
        await dataBase.cadastrar(DEFAULT_ITEM_CADASTRAR)
        await dataBase.cadastrar(DEFAULT_ITEM_ATUALIZAR)
    })

    it('Deve pesquisar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const [ resultado ] = await dataBase.listar(expected.id)    // Como pegar só a primeira posição do Array DESTRUCTURING []
        const posicaoUm = resultado[0]    // Como pegar só a primeira posição do Array

        deepEqual(resultado, expected)      // deepEqual: completamente igual
    })

    it('Deve cadastrar um heroi, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const resultado = await dataBase.cadastrar(DEFAULT_ITEM_CADASTRAR)
        const [ actual ] = await dataBase.listar(DEFAULT_ITEM_CADASTRAR.id)

        deepEqual(actual, expected)
    })

    it('Deve remover um heroi por id', async () => {
        const expected = true
        const resultado = await dataBase.remover(DEFAULT_ITEM_CADASTRAR.id)
        deepEqual(resultado, expected)
    })

    it('Deve atualizar um heroi pelo id', async () => {
        const expected = {
            ...DEFAULT_ITEM_ATUALIZAR,
            nome: 'Pacificador',
            poder: 'Gente Boa'
        }
        await dataBase.atualizar(expected.id, {
            nome: expected.nome,
            poder: expected.poder
        })
        
        // console.log('expected', expected)    
        const [ realResult ] = await dataBase.listar(expected.id)
        deepEqual(realResult, expected)
    })
})
