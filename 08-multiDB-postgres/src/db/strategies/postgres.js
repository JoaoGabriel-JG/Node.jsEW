const ICrud = require('./interfaces/interfaceCrud')
const Sequelize = require('sequelize')

class Postgres extends ICrud {
    constructor() {
        super()
        this._driver = null         // O _ representa um metodo privado
        this._herois = null
        this._conect()
    }
    async isConnected() {
        try {
            await this._driver.authenticate()
            return true
        } 
        catch(error){
            console.log('Fail! ', error)
            return false
        }
    }
    async defineModel() {
        this._herois = driver.define('herois', {
            id: {
                type: Sequelize.INTEGER,
                required: true,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: Sequelize.STRING,
                required: true
            },
            poder: {
                type: Sequelize.STRING,
                required: true
            }
        }, {
            tableName: 'TB_HEROIS',
            freezeTableName: false,
            timestamps: false
        })
        await herois.sync()
    }
    create(item) {
        console.log('O item foi salvo em Postgres')
    }
    _conect() {
        this._driver = new Sequelize(
            'heroes',
            'JGBelar',
            'Senha@2117',
            {
                host: 'localhost',
                dialect: 'postgres',
                quoteIdentifiers: false,
                operatorAliases: false
            }
        )
    }
}

module.exports = Postgres