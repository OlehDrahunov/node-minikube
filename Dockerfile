FROM node:24-alpine
WORKDIR /usr/src/app
# ВИПРАВЛЕНО: Явно копіюємо обидва файли: package.json та package-lock.json
COPY package.json package-lock.json ./
RUN npm ci --only=production
COPY . .
USER node
EXPOSE 3000
CMD ["node", "server.js"]