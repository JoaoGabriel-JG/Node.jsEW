const { program, Command } = require('commander')
const database = require('./database')
const dataBase = require('./database')
const Heroi = require('./heroi')

async function main() {
    program
        .version('v1')
        .option('-n, --nome [value]', "Nome do Heroi")
        .option('-p, --poder [value]', "Poder do Heroi")
        .option('-i, --id [value]', "ID do Heroi")

        .option('-c, --cadastrar', "Cadastrar um Heroi")
        .option('-l, --listar', "Listar um Heroi")
        .option('-r, --remover', "Remove um Heroi pelo ID")
        .option('-a, --atualizar [ value ]', "Atualizar um Heroi pelo ID")
        .parse(process.argv)
    
    const heroi = new Heroi(Command) 
    
    try {
        if(Command.cadastrar) {
            delete heroi.id

            const resultado = await dataBase.cadastrar(heroi)
            if(!resultado) {
                console.error('Heroi não foi cadastrado')
                return
            }
            console.log('Heroi cadastrado com sucesso')
        }
        if(Command.listar) {
            const resultado = await dataBase.listar()
            console.log(resultado)
            return
        }
        if (Command.remover) {
            const resultado = await dataBase.remover(heroi.id)
            if(!resultado) {
                console.error('Não foi possivel remover o heroi')
            }
            console.log('Heroi removido com sucesso')
        }
        if(Command.atualizar) {
            const idParaAtualizar = parseInt(Command.atualizar)
            // Remover todas as chaves com undefined | null
            const dado = JSON.stringify(heroi)
            const heroiAtualizar = JSON.parse(dado)
            const resultado = await database.atualizar(idParaAtualizar, heroiAtualizar)
            if(!resultado) {
                console.error('Não foi possivel atualizar o heroi')
                return
            }
            console.log('Heroi atualizado com sucesso!')
        }
    } 
    catch (error) {
        console.error('DEU RUIM ', error)
    }
}

main()
