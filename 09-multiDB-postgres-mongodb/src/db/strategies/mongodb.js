const ICrud = require('./interfaces/interfaceCrud')
const Mongoose = require('mongoose')
const STATUS = {
    0: 'Desconectado',
    1: 'Conectado',
    2: 'Conectando',
    3: 'Desconectando'
}

class MongoDB extends ICrud {   // Classe concreta para implementar funções the fato
    constructor() {
        super()
        this._herois = null
        this._driver = null
    }
    
    async isConnected() {
        const state = STATUS[this._driver.readyState]
        if(state === 'Conectado') return state
        if(state !== 'Conectando') return state

        await new Promise(resolve => setTimeout(resolve, 1000))    
        
        return STATUS[this._driver.readyState]
    }

    defineModel() {
        heroiSchema = new Mongoose.Schema({ 
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
        this._herois = Mongoose.model('herois', heroiSchema)
    }

    connect() {
        Mongoose.set("strictQuery", true);

        Mongoose.connect('mongodb://jgjgjg:minhasenhasecreta@localhost:27017/herois',
            { useNewUrlParser: true }, function (error) {
                if (!error) return
                console.log('Falha na conexão! ', error)
            })
        const connection = Mongoose.connection
        this._driver = connection
        connection.once('open', () => console.log('database rodando!!'))
    }

    async create(item) {
            const resultCadastrar = await model.create({ 
                nome: 'Osamu Dazai',
                poder: 'Não Mais Humano'
             })
             console.log('Result cadastrar: ', resultCadastrar)
    }
}

module.exports = MongoDB