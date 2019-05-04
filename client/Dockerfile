### STAGE 1: Build ###
FROM node:alpine

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /tmp
COPY ./package*.json /tmp/
RUN npm install --no-progress

RUN mkdir -p /usr/src/app
RUN mv /tmp/* /usr/src/app
COPY . /usr/src/app

WORKDIR /usr/src/app
# RUN ls -a
# RUN cat ./node_modules/.bin/webpack-dev-server
EXPOSE 3000
ENV PORT=3000

# RUN npm start
# ENTRYPOINT ["cat"]
CMD npm start
# ENTRYPOINT node ./node_modules/.bin/webpack-dev-server
