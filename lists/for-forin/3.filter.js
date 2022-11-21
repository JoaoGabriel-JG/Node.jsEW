const { obterPessoas } = require('./service')   // Do JSON eu quero somente o obterPessoas

/*
DESTRUCTURING

const item = {
    nome: Joao,
    idade: 20
}

Cria variaveis e extrai somente o pedido

const { nome, idade } = item
console.log(nome, idade)

*/

Array.prototype.meuFilter = function (callback) {   // prototype extensão para manipular Array
    const lista = []
    for(index in this) {
        const item = this[index]
        const result = callback(item, index, this)
        // 0, "", null, undefined === false
        if(!result) continue
        lista.push(item)
    }
    return lista
}


async function main() {
    try {
        const { results } = await obterPessoas(`a`)

        // const familiaLars = results.filter(function (item) {
        //     // Por padrão precisa retornar um Bool para informar se deve manter ou remover da lista
        //     // False remove da lista True mantém (remove = retornar um novo array com os objs filtrados)
        //     // Não encontrou = -1
        //     // Encontrou = posição no array
        //     const result = item.name.toLowerCase().indexOf(`lars`) !== -1
        //     return result
        // })

        const familiaLars = results.meuFilter((item, index, lista) => {
            console.log(`index: ${index}`, lista.length)
            return item.name.toLowerCase().indexOf('lars') !== -1
        })

        const names = familiaLars.map((pessoa) => pessoa.name)
        console.log(names)
    }
    catch (error){
        console.error('DEU RUIM ', error)
    }
}
main()
