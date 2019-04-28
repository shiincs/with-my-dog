FROM node:carbon-alpine

ENV NODE_ENV=production

COPY ./ /origin

WORKDIR /origin

RUN npm install && \
    npm prune --production

EXPOSE 3000

CMD ["npm", "start"]
