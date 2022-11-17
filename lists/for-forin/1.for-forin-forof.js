const service = require('./service')    // Importar modulos criados por mim

async function main() {     // Vai manipular Promise? USA O ASYNC
    try {
        const result = await service.obterPessoas('a')
        const names = []

        console.time('for')
        for(let i = 0; i <= result.results.length -1; i++) {
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('for')

        console.log(`names `, names)
    }
    catch (error) {
        console.error('Erro interno', error)
    }
}

main()
