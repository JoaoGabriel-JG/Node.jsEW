const { obterPessoas } = require('./service')

// Próprio reduce
Array.prototype.meuReduce = function (callback, valorInicial) {
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
    for(let index = 0; index <= this.length; index++) {
        valorFinal = callback(valorFinal, this[index], this)
    }
    return valorFinal
}


async function main() {
    try {
        const { results } = await obterPessoas('a')
        const pesos = results.map(item => parseInt(item.height))
        console.log('Pesos: ', pesos)
        // // [20.2, 30.3, 40.5 ] = X \\ somar todos os resultados para saber o valor final 
        // const total = pesos.reduce((anterior, proximo) => {
        //     return anterior + proximo
        // }, 0) // Importante deixar um valor padrão para caso não tenha

        const minhaLista = [
            ['João', 'Gabriel'],
            ['NodeBR', 'Nerdzão']
        ]
        const total = minhaLista.meuReduce((anterior, proximo) => {
            return anterior.concat(proximo)
        }, [])
        .join(', ')
        console.log('Total: ', total)
    }
    catch (error) {
        console.error('DEU RUIM ', error)
    }
}
main()