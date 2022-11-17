const axios = require('axios')
const URL = `https://swapi.dev/api/people`

async function obterPessoas (nome) {    // async: manipular Promises internamente da função
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.get(url)
    return response.data
}

obterPessoas('r2')
    .then(function (resultado) {
        console.log('Resultado: ', resultado)
    })
    .catch(function (error) {
        console.error('DEU RUIM ', error)
    })
