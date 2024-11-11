FROM node:latest

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodeuser

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -g nodemon

COPY . .

RUN chown -R nodeuser:nodejs /app

USER nodeuser

ENV NODE_ENV=development
ENV PORT=3000

EXPOSE 3000

CMD ["npm", "run", "dev"]