FROM node:alpine 
WORKDIR /app
COPY package*.json ./
RUN npm i -g @adonisjs/cli && npm i @adonisjs/ignitor
RUN npm i -S sqlite3

RUN npm install 
COPY . .
EXPOSE 3333
CMD ["npm","start"]   