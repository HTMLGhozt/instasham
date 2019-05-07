### STAGE 1: Build ###
FROM node:alpine

ENV NODE_ENV=dev

WORKDIR /tmp
COPY ./package*.json /tmp/
RUN npm install --no-progress --quiet

RUN mkdir -p /usr/src/app
RUN mv /tmp/* /usr/src/app
COPY . /usr/src/app

WORKDIR /usr/src/app
EXPOSE 3000 
ENV PORT=3000

CMD ["npm", "run", "start:dev"]
