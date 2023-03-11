const Mongoose = require('mongoose')
Mongoose.set("strictQuery", true);

Mongoose.connect('mongodb://jgjgjg:minhasenhasecreta@localhost:27017/herois', 
    { useNewUrlParser: true }, function (error) {
        if(!error) return 
        console.log('Falha na conexão! ', error)
    })

const connection = Mongoose.connection

connection.once('open', () => console.log('database rodando!!'))

const heroiSchema = new Mongoose.Schema({ 
    nome: {
        type: String,
        required: true
    },
    poder: {
        type: String,
        required: true
    },
    insertdAt: {
        type: Date,
        default: new Date()
    }
 })
const model = Mongoose.model('herois', heroiSchema)

async function main() {
    const resultCadastrar = await model.create({ 
        nome: 'Osamu Dazai',
        poder: 'Não Mais Humano'
     })
     console.log('Result cadastrar: ', resultCadastrar)

     const listItens = await model.find()
     console.log('Items: ', listItens)
}
main()


// ===========> Executar Conexão 1 <==============
// ===============================================
// setTimeout(() => {
//     const state = connection.readyState
//     console.log('state ', state)
// }, 1000)
// ===============================================


// ===========> Tipos de Conexão <================
/*
    0: Desconectado
    1: Conectado
    2: Conectando
    3: Desconectando
*/
// ===============================================


// =================> Tipos de Função <====================
// function nomeFuncao() {

// }
// const minhaFuncao = function () {

// }
// const minhaFuncaoArrow = () => {

// }
// const minhaFuncaoArrow = (params) => console.log(params)
// ========================================================