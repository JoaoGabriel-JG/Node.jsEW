const assert = require('assert')
const Postgres = require('./../db/strategies/postgres')
const Context = require('./../db/strategies/base/contextStrategy')

const context = new Context(new Postgres())
const MOCK_HEROI_CADASTRAR = { nome: 'Edogawa Ranpo', poder: 'Dedução Ultra' }
const MOCK_HEROI_ATUALIZAR = { nome: 'Lovecraft', poder: 'invicto pela chuva' }


describe('Postgres Strategy', function() {
    this.timeout(Infinity)
    this.beforeAll(async function () {
        await context.connect()
        await context.create(MOCK_HEROI_ATUALIZAR)
    })

    it('PostgresSQL Connection', async function () {
        const result = await context.isConnected()
        assert.equal(result, true)
    })
    it('cadastrar', async function () {
        const result = await context.create(MOCK_HEROI_CADASTRAR)
        delete result.id
        assert.deepEqual(result, MOCK_HEROI_CADASTRAR)
    })
    it('listar', async function () {
        const [result] = await context.read({ nome: MOCK_HEROI_CADASTRAR.nome })
        delete result.id
        // Pegar a primeira posição
        // const posicaoZero = result[0]
        // const [posicao1, posicao2] = ['esse e o 1', 'esse e o 2']
        
        assert.deepEqual(result, MOCK_HEROI_CADASTRAR)
    })

    // Rest Spread

    it('atualizar', async function () {
        const [itemAtualizar] = await context.read({ nome: MOCK_HEROI_ATUALIZAR.nome })
        const novoItem = {
            ...MOCK_HEROI_ATUALIZAR,     // Dividir as chaves nome e poder
            nome: 'Kenji Miyazaki'
        }
        const [result] = await context.update(itemAtualizar.id, novoItem)
        const [itemAtualizado] = await context.read({ id: itemAtualizar.id })
        assert.deepEqual(result, 1)
        assert.deepEqual(itemAtualizado.nome, novoItem.nome)        // Não é uma boa pratica colocar vários asserts
    }) 
})



/*
No JS temos uma técnica chamada rest/spread que é um 
metodo usado para mergear objetos ou separa-lo

{
    nome: 'Osamu Dazai',
    poder: 'Não mais humano'
}

{
    dataNasc: '21-08-02'
}

// final
{
    nome: 'Osamu Dazai',
    poder: 'Não mais humano'
    dataNasc: '21-08-02'
}
*/