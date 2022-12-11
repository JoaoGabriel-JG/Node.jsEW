docker run \    =================>> CRIAR UM CONTAINER
    --name postgres \
    -e POSTGRE_USER=JGBelardinucci \
    -e POSTGRES_PASSWORD=Senha@2117\
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres 

docker ps =================>> ver se está rodando 

docker exec -it postgres /bin/bash =================>> ENTRAR NO CONTAINER PARA RODAR COMANDOS

docker run \    =================>> INTERFACE GRÁFICA
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer