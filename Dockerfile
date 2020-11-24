FROM node:14.15.0 AS build
RUN mkdir -p /build
WORKDIR /build
COPY . /build
RUN npm ci


# now that we have proven our app in the build container we'll reuse our code to create a prodcution image
FROM node:14.15.0-slim

EXPOSE 3000
RUN mkdir -p /svc
WORKDIR /svc
COPY --from=build /build/server.js /build/package.json /build/package-lock.json ./
RUN npm install --production

CMD ["npm","start"]