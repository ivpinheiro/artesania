# Use uma imagem Node.js como base
FROM node:latest
# Instale o Json Server globalmente
RUN npm install -g json-server

# Crie um diretório de trabalho no contêiner
WORKDIR /data

# Copie o arquivo package.json e package-lock.json
COPY ./server/package*.json ./

# Copie o arquivo db.json (supondo que ele esteja no mesmo diretório que o Dockerfile)
COPY ./server/data/db.json ./

# Inicie o Json Server quando o contêiner for iniciado
ENTRYPOINT ["json-server", "--watch", "db.json", "--host", "localhost", "--port", "9000"]