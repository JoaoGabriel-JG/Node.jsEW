/*
0 Obter um usuário
1 Obter o número de telefone de um usuário a partir do seu id
2 Obter o endereço do usuário pelo ID
*/

// Sincronizando os comandos
// Primeiro parametro é o ERRO e o segundo o SUCESSO / Callback

function obterUsuario(callback) {
    setTimeout(function() {     // função de espera
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()      // criar datas
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '1190002',
            ddd: 11
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Rua dos Bobos',
            numero: 0
        })
    }, 2000)
}

function resolverUsuario(erro, usuario) {
    console.log('Usuário: ', usuario)
}

obterUsuario(function resolverUsuario(error, usuario) {
    // null // '' // 0 === false
    if(error) {
        console.error('DEU RUIM EM USUÁRIO ',error)
        return
    }
    obterTelefone(usuario.id, function resovlerTelefone(error1, telefone) {
        if(error1) {
            console.error('DEU RUIM EM TELEFONE ', error)
            return
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if(error2) {
                console.error('DEU RUIM EM ENDEREÇO ', error)
                return
            }

            console.log(`
            Nome: ${usuario.nome},
            Endereco: ${endereco.rua}, ${endereco.numero}
            Telefone: ${telefone.ddd}) ${telefone.telefone}
            `)
        })
    })
})

// const telefone = obterTelefone(usuario.id)

// console.log('Telefone: ', telefone)
