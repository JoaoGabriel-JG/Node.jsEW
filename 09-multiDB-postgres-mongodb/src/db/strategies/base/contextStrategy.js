const ICrud = require('./../interfaces/interfaceCrud')

class ContextStrategy extends ICrud {       // Classe abstrata chama os metodos de acordo com as coisas que for passado no construtor
    constructor(strategy) {
        super()         // Toda vez que derivar de uma classe o ideal é chamar o super
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
    isConnected() {
        return this._database.isConnected()
    }
    connect() {
        return this._database.connect()
    }
}

module.exports = ContextStrategy