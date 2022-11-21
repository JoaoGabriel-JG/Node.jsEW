const { obterPessoas } = require('./service')

async function main() {
    try {
        const { results } = await obterPessoas('a')
        const pesos = results.map(item => parseInt(item.heigth))
        // [20.2, 30.3, 40.5 ] = X \\ somar todos os resultados para saber o valor final 

        
    }
    catch (error) {
        console.error('DEU RUIM ', error)
    }
}
main()
