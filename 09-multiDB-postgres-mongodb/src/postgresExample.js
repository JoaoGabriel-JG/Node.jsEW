// npm install sequelize / npm install pg-hstore pg
const Sequelize = require('sequelize')
const driver = new Sequelize(
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

async function main() {
    const herois = driver.define('herois', {
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
    await herois.create({
        nome: 'Atsushi Nakajima',
        poder: 'Besta Sob o Luar'
    })
    

    const result = await herois.findAll({ raw: true, attributes: ['nome'] }) // raw serve para filtrar somente as informações pedidas
    console.log('result', result)
}

main()