const assert = require('assert')
const MongoDb = require('./../db/strategies/mongodb')
const Context = require('./../db/strategies/base/contextStrategy')

const MOCK_HEROI_CADASTRAR = {
    nome: 'Nakahara Chuuya',
    poder: 'Pelo Corrupto Pesar'
}
const MOCK_HEROI_DEFAULT = {
    nome: `Fyodor Dostoevsky-${Date.now()}` ,
    poder: 'Crime e Castigo'
}
const context = new Context(new MongoDb())

describe('MongoDB Suite de Testes', function () {
    this.beforeAll(async () => {
        await context.connect()
        await context.create(MOCK_HEROI_DEFAULT)
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
    it('listar', async () => {
        const [{ nome, poder }] = await context.read({ nome: MOCK_HEROI_DEFAULT.nome })
        const result = { nome, poder }
        assert.deepEqual(result, MOCK_HEROI_DEFAULT)
    })
})