FROM node:10-alpine

WORKDIR /app

COPY pacekage.json /app

USER node

RUN npm install

COPY . /app

EXPOSE 3000
CMD [ "forever", "start", "bin/www" ]
