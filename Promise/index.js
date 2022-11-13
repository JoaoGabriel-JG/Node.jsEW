const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
    return new Promise(function resolvePromisse(resolve, reject) {
        setTimeout(function() {  
            return resolve({  
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromisse(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: '1190002',
                ddd: 11
            })
        }, 2000)
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Rua dos Bobos',
            numero: 0
        })
    }, 2000)
}

// Simular o static void main
// 1º Passo adicionar a palavra async na função -> automaticamente ela retonará uma promisse
main()  // Sempre chamar o metodo antes da função
async function main() {
    try {
        console.time('medida-promise')
        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        // const endereco = await obterEnderecoAsync(usuario.id) 

        const resultado = await Promise.all([   // Diminuindo o tempo de execução
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id) 
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]

        console.log(`
            Nome: ${usuario.nome},
            Telefone: (${telefone.ddd}) ${telefone.telefone},
            Endereco: ${endereco.rua} ${endereco.numero}
        `)
        console.timeEnd('medida-promise')

    } catch(error) {
        console.error('DEU RUIM ', error)
    }
}
