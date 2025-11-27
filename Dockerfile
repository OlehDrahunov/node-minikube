FROM node:24-alpine
WORKDIR /usr/src/app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm install --production

COPY --chown=node:node . .
USER node

EXPOSE 3000

CMD ["node", "server.js"]
