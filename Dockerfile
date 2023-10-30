# Use uma imagem Node.js como base
FROM node:latest

# Crie um diretório de trabalho no contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json
COPY ./server/package*.json ./

# Copie o arquivo db.json (supondo que ele esteja no mesmo diretório que o Dockerfile)
COPY ./server/data/db.json ./

# Instale o Json Server globalmente
RUN npm install -g json-server

# Exponha a porta em que o Json Server irá funcionar
EXPOSE 9000

# Inicie o Json Server quando o contêiner for iniciado
CMD ["json-server", "--watch", "db.json", "-H", "localhost", "-p", "9000"]
