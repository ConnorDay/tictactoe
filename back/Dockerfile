FROM node:22

WORKDIR /app
COPY ./package.json ./package-lock.json ./

RUN npm install

COPY . /app

EXPOSE 8000