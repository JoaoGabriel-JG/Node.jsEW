const EventEmitter = require('events')
class MeuEmissor extends EventEmitter {

}
const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'          // Criando um evento 

meuEmissor.on(nomeEvento, function (click) {
    console.log('Um usuário clicou ', click)
})

// meuEmissor.emit(nomeEvento, 'na barra de rolagem')
// meuEmissor.emit(nomeEvento, 'no ok')

// let count = 0
// setInterval(function () {
//     meuEmissor.emit(nomeEvento, 'no ok' + (count ++))

// }, 1000)


// Eventos: usados para ações continuas como: manipular click

const stdin = process.openStdin()
stdin.addListener('data', function (value) {        // Esperar a alteração de um evento especifico
    console.log(`Você digitou: ${value.toString().trim()}`)
})




// ERRO: a Promise é usada para executar somente uma vez

// const stdin = process.openStdin()
// function main() {
//     return new Promise(function (resolve, reject) {
//         stdin.addListener('data', function (value) {        // Esperar a alteração de um evento especifico
//             // console.log(`Você digitou: ${value.toString().trim()}`)
//             return resolve(value)
//         })
//     })
// }
// main().then(function (resultado) {
//     console.log('resultado ', resultado.toString())
// })