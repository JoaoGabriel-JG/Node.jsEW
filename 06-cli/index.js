const { program, Command } = require('commander')
const dataBase = require('./database')

async function main() {
    program
        .version('v1')
        .option('-n, --nome [value]', "Nome do Heroi")
        .option('-p, --poder [value]', "Poder do Heroi")

        .option('-c, --cadastrar', "Cadastrar um Heroi")
        .parse(process.agrv)
    }
    try {
        if(Command.cadastrar) {
            console.log(Command)
            // const resultado = await dataBase.cadastrar(Command)
        }
    }
    catch (error) {
        console.error('DEU RUIM ', error)
    }

main()
