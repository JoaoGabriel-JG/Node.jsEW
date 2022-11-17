const service = require('./service')

Array.prototype.meuMap = function (callback) {  // Substituir uma função global / metodo global de listas \\
    const novoArrayMapeado = []
    for (let indice = 0; indice <= this.length -1; indice++) {
        const resultado = callback(this[indice], indice)    // Quando executar essas funções adiciona os parametros na lista \\
        novoArrayMapeado.push(resultado)
    }

    return novoArrayMapeado
} 

// Mappode ser um for reduzido \\

async function main () {
    try {
        const results = await service.obterPessoas(`a`)
        // const names = []
        // results.results.forEach(function (item) {   // Pra cada item da lista ele chama a função e adiciona o item \\
        //     names.push(item.name)
        // })
        // const names = results.results.map(function (pessoa) {     // Pra cada item dessa lista ele retorna um novo array somente com o nome \\
        //     return pessoa.name                                    // Não precisa de variaveis externas \\
        // })

        // Forma mais elegante \\        
        // const names = results.results.map( (pessoa) => pessoa.name )

        const names = results.results.meuMap(function (pessoa, indice) {
            return `[ ${indice} ] ${pessoa.name}`
        })
        console.log('names: ', names)
    }
    catch (error){
        console.error('DEU RUIM ', error)
    }
}
main ()
