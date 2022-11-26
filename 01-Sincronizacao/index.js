/*
0 Obter um usuário
1 Obter o número de telefone de um usuário a partir do seu id
2 Obter o endereço do usuário pelo ID
*/
// Importamos um módulo interno do node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)



// Sincronizando os comandos
// Primeiro parametro é o ERRO e o segundo o SUCESSO / Callback

function obterUsuario() {
    // Quando der algum problema -> reject(ERRO)
    // Quando for sucesso -> Resolv
    return new Promise(function resolvePromisse(resolve, reject) {
        setTimeout(function() {  
            
            // return reject(new Error('DEU RUIM DE VERDADE!'))

            return resolve({    // função de espera
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()      // criar datas
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

const usuarioPromisse = obterUsuario()
// Para manipular o sucesso usamos a função .then
// Para manipular erros usamos o .catch
// Conceito pipe: usuario -> telefone -> telefone
usuarioPromisse
    .then(function (usuario) {
        return obterTelefone(usuario.id)
        .then(function resolverTelefone(result) {
            return { 
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                },
                telefone: result
            }
        })
    })
    .then(function (resultado) {
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco(result) {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then(function(resultado) {
        console.log(`
            Nome: ${ resultado.usuario.nome }
            Endereço: ${ resultado.endereco.rua }, ${ resultado.endereco.numero }
            Telefone: (${ resultado.telefone.ddd }) ${ resultado.telefone.telefone }
        `)
    })
    .catch(function(error) {
        console.error('DEU RUIM ', error)
    })

// obterUsuario(function resolverUsuario(error, usuario) {
//     // null // '' // 0 === false
//     if(error) {
//         console.error('DEU RUIM EM USUÁRIO ',error)
//         return
//     }
//     obterTelefone(usuario.id, function resovlerTelefone(error1, telefone) {
//         if(error1) {
//             console.error('DEU RUIM EM TELEFONE ', error)
//             return
//         }
//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
//             if(error2) {
//                 console.error('DEU RUIM EM ENDEREÇO ', error)
//                 return
//             }

//             console.log(`
//             Nome: ${usuario.nome},
//             Endereco: ${endereco.rua}, ${endereco.numero}
//             Telefone: ${telefone.ddd}) ${telefone.telefone}
//             `)
//         })
//     })
// })

// const telefone = obterTelefone(usuario.id)

// console.log('Telefone: ', telefone)
