const Commander = require('commander')
const dataBase = require('./database')

async function main() {
    Commander
        .version('v1')
        .option('-n, --nome [value]', "Nome do Heroi")
        .option('-p, --poder [value]', "Poder do Heroi")

        .option('-c, --cadastrar', "Cadastrar um Heroi")
        .parse(process.agrv)
    }
    try {

    }
    catch (error) {
        console.error('DEU RUIM ', error)
    }

main()
