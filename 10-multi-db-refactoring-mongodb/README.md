docker run \    =================>> CRIAR UM CONTAINER
    --name postgres -e POSTGRES_USER=JGBelar -e POSTGRES_PASSWORD=Senha@2117 -e POSTGRES_DB=heroes -p 5432:5432 -d postgres 

docker ps =================>> ver se está rodando 

docker exec -it postgres /bin/bash =================>> ENTRAR NO CONTAINER PARA RODAR COMANDOS

docker run \    =================>> INTERFACE GRÁFICA
    --name adminer -p 8080:8080 --link postgres:postgres -d adminer


----  MONGODB

docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin -d mongo:4

docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient

=================>> criar um banco com usuário

docker exec -it mongodb   mongo --host localhost -u admin -p senhaadmin --authenticationDatabase admin --eval "db.getSiblingDB('herois').createUser({user: 'jgjgjg', pwd: 'minhasenhasecreta', roles: [{role: 'readWrite',  db: 'herois'}]})"
