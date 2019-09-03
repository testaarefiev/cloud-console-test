# build stage
FROM node:10.15 as builder

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY ./ ./
RUN yarn build

FROM nginx
COPY --from=builder /app/dist /var/www
COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
