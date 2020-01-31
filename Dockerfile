FROM node:alpine

WORKDIR /code
ADD . /code
RUN npm install && npm run build && npm install -g http-server
EXPOSE 7000
CMD http-server ./public -p 7000
