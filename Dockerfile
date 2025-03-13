FROM node:lts-slim
WORKDIR /app
COPY package*.json ./
COPY .env .env
COPY . .