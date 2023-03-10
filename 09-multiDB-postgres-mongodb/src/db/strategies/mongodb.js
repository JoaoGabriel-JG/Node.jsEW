const ICrud = require('./interfaces/interfaceCrud')

class MongoDB extends ICrud {   // Classe concreta para implementar funções the fato
    constructor() {
        super()
    }

    create(item) {
        console.log('O item foi salvo em MongoDB')
    }
}

module.exports = MongoDB