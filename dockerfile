# Install and configure application
FROM node:10 AS builder
WORKDIR /app
COPY ./package.json ./
RUN yarn install
COPY . .
RUN yarn build

# Production version
FROM node:16-alpine
ENV NODE_ENV production
WORKDIR /app
COPY --from=builder /app ./

# Run container
CMD yarn start:prod
EXPOSE 3000
