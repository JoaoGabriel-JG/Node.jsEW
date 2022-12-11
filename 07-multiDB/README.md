docker run \ 
    --name postgres \
    -e POSTGRE_USER=jgjgjg \
    -e POSTGRES_PASSWORD=Ooudh2934@! \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres 

docker ps =================>> ver se está rodando 
docker exec -it postgres /bin/bash =================>> ENTRAR NO CONTAINER PARA RODAR COMANDOS