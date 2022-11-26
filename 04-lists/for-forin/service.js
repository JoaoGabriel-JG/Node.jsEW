const axios = require('axios')
const URL = `https://swapi.dev/api/people`

async function obterPessoas (nome) {    // async: manipular Promises internamente da função
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.get(url)
    return response.data
}

// Transformar o arquivo em um módulo

module.exports = {
    obterPessoas    // Se a chave do OBJ for o mesmo nome do valor não precisa passar o valor
}










// obterPessoas('r2')
//     .then(function (resultado) {
//         console.log('Resultado: ', resultado)
//     })
//     .catch(function (error) {
//         console.error('DEU RUIM ', error)
//     })