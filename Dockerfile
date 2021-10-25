FROM node:alpine

WORKDIR /usr/app

COPY . . 

RUN yarn install

EXPOSE 3333

CMD ["yarn", "start"]