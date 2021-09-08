FROM node:alpine

LABEL version="1.0"
LABEL description="This is the docker image for the json-server API"
LABEL maintainer = ["braxtonbrewton@gmail.com"]

# Environment variables
ENV APP_DIR=/usr/src/app

# Create app directory
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

# Install app dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy db.json and other directories/files
COPY . .


EXPOSE 4000

CMD ["npm", "start"]