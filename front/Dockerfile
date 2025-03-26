FROM node:22

WORKDIR /app
COPY ./package*.json .

RUN npm i

COPY . /app/

EXPOSE 3000