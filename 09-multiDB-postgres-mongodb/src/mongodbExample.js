const Mongoose = require('mongoose')
Mongoose.connect('mongodb://jgjgjg:senha123@@localhost:27017/herois', 
    { useNewUrlParser: true }, function (error) {
        if(!error) return 
        console.log('Falha na conexão! ', error)
    })

const connection = Mongoose.connection

connection.once('open', () => console.log('database rodando!!'))



// function nomeFuncao() {

// }
// const minhaFuncao = function () {

// }
// const minhaFuncaoArrow = () => {

// }
// const minhaFuncaoArrow = (params) => console.log(params)
