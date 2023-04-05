FROM node:latest

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . ./

EXPOSE 4000

CMD ["node", "server.js"]