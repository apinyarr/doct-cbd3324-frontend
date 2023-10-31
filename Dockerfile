FROM node:20.9.0-alpine3.17

ENV NPM_CONFIG_LOGLEVEL=info \
    NODE_ENV=development \
    BACKEND_URL=http://127.0.0.1:8088/search \
    PORT=8080

COPY ["package.json", "package-lock.json*","./"]

RUN npm install

COPY ./app .

EXPOSE 8080

ENTRYPOINT npm start