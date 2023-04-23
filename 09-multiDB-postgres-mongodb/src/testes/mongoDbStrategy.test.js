const assert = require('assert')
const MongoDb = require('./../db/strategies/mongodb')
const Context = require('./../db/strategies/base/contextStrategy')

const MOCK_HEROI_CADASTRAR = {
    nome: 'Nakahara Chuuya',
    poder: 'Pelo Corrupto Pesar'
}
const context = new Context(new MongoDb())

describe('MongoDB Suite de Testes', function () {
    this.beforeAll(async () => {
        await context.connect()
    })
    it('Verificar conexão ', async () => {
        const result = await context.isConnected()
        const expected = 'Conectado'

        assert.deepEqual(result, expected)
    })
    it('cadastrar', async () => {
        const { nome, poder } = await context.create(MOCK_HEROI_CADASTRAR)
        assert.deepEqual({ nome, poder }, MOCK_HEROI_CADASTRAR)
    })
})
