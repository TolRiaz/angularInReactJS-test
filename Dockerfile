FROM node:slim

ENV PORT=9001

WORKDIR "/app"

COPY package.json ./

RUN npm install
RUN yarn init -y
RUN yarn install
RUN yarn global add @angular/cli

COPY ./ ./

CMD ["npm","run","start"]

EXPOSE ${PORT}
