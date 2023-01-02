const ICrud = require('./../interfaces/interface.crud')

class ContextStrategy extends ICrud {       // Classe abstrata chama os metodos de acordo com as coisas que for passado no construtor
    constructor(strategy) {
        this._database = strategy
    }

    create(item) {
        return this._database.create(item)
    }
    read(item) {
        return this._database.read(item)
    }
    update(id, item) {
        return this._database.update(id, item)
    }
    delete(id) {
        return this._database.delete(id)
    }
}

module.exports = ContextStrategy