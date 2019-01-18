### STAGE 1: Build ###
FROM node:alpine as build

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /tmp
COPY package*.json /tmp/
RUN npm config set registry http://registry.npmjs.org/ && npm install --no-progress --ignore-optional

WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/
ENV PORT=3000
EXPOSE 3000
