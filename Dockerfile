FROM node:10-alpine
WORKDIR /usr/src/smartbin
COPY package.json ./
RUN yarn install
COPY . .
RUN yarn run build
ENV PORT 3000
EXPOSE 3000
CMD ["yarn", "start"]
