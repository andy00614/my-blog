FROM node:alpine
WORKDIR /code
COPY package.json .
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org && cnpm install && cnpm install nodemon -g
EXPOSE 7012
CMD npm run skr
COPY . .
