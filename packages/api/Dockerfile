FROM node:16

WORKDIR /app

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 8000

CMD ["node", "server.js"]
