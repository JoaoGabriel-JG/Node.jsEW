// docker ps
// docker exec -it 2e2196d5a005 mongo -u jgjgjg -p minhasenhasecreta --authenticationDatabase herois

// Matabases
// show dbs

// Mudando para uma DB especifica
// use herois

// Mostrar "Tabelas" (coleções)
// show collections

for(let i = 0; i <= 1000; i++) {
    db.herois.insert({
        nome: `Clone-${i}`,
        poder: 'Não Mais Humano',
        dataNascimento: '1998-06-19'
    })    
}

db.herois.count()
db.herois.findOne()
db.herois.find().limit(500).sort({ nome: -1 })
db.herois.find({}, { poder: 1, _id: 0 })


// Create

db.herois.insert({
    nome: 'Osamu Dazai',
    poder: 'Não Mais Humano',
    dataNascimento: '1998-06-19'
})

// Read

db.herois.find()
db.herois.find().pretty()

// Update

db.herois.update({ _id: ObjectId("640b88147eb37a53baa1ed8b") }, { nome: 'Ranpo Edogawa' })

db.herois.update({ _id: ObjectId("640b88977eb37a53baa1f173") }, { $set: { nome: 'Atsushi Nakajima' }})

db.herois.update({ poder: 'Não Mais Humano' }, { $set: { poder: 'Besta Sob o Luar' }})

// Delete

db.herois.remove({})    // Remove todos da base
db.herois.remove({ nome: 'Atsushi Nakajima' })