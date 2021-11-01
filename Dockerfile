FROM node:alpine 
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install 
COPY ./DIST .
EXPOSE 3333
CMD ["npm","start"]