const service = require('./service')    // Importar modulos criados por mim \\

async function main() {     // Vai manipular Promise? USA O ASYNC \\
    try {
        const result = await service.obterPessoas('a')
        const names = []

        console.time('for')
        for(let i = 0; i <= result.results.length -1; i++) {
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('for')

        // Nesse caso a melhor opção de velocidade foi o FOR IN \\
        // Forin cria automaticamente o incrementador em cima do resultado utilizando menos linhas \\

        console.time('forin')
        for(let i in result.results) {
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('forin')

        // For of utiliza muitas poucas linhas \\

        console.time('forof')
        for(pessoa of result.results) {
            names.push(pessoa.name)
        }
        console.timeEnd('forof')

        console.log(`names `, names)
    }
    catch (error) {
        console.error('Erro interno', error)
    }
}

main()
