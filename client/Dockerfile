### STAGE 1: Build ###
FROM node:alpine as build

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /tmp
COPY /package*.json ./
RUN npm config set registry http://registry.npmjs.org/ && npm install --no-progress --ignore-optional

WORKDIR /usr/src/app
COPY . /usr/src/app
ENV PORT=3000
EXPOSE 3000
CMD ["npm", "run", "start"]
