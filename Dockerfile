FROM node:alpine

WORKDIR /usr/extension

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 1779

CMD ["npm". "start"]