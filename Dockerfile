FROM node:15.14.0-alpine3.10

WORKDIR /usr/src/app

RUN npm update && npm upgrade

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . ./

CMD ["yarn", "start"]