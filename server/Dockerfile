FROM node:16.13-alpine

WORKDIR /app

COPY ./server/package*.json ./

RUN npm install

COPY ./server/ ./

EXPOSE 8000/tcp

CMD npm run start
