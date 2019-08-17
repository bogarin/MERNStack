FROM node:12-alpine
WORKDIR /home/node/app
RUN npm i -g yarn
COPY package.json ./
COPY . .
RUN yarn install
RUN yarn global add nodemon
RUN ls -la && pwd
EXPOSE 3000
CMD [ "nodemon app.js"]