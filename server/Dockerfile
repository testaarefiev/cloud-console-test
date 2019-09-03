# build
FROM node:10.15 as builder

ENV NODE_ENV production
ENV PORT 3000

RUN mkdir -p /app
COPY . /app/
WORKDIR /app
RUN yarn install --production

EXPOSE 3000
CMD yarn start
