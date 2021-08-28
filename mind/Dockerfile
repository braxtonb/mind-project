FROM node:alpine AS build

LABEL version="1.0"
LABEL description="This is the docker image for the build step of a multi step react production image"
LABEL maintainer = ["braxtonbrewton@gmail.com"]

# Environment variables
ENV APP_DIR=/usr/src/app

# Create app directory
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

# Install app dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy src, public, etc directories/files
COPY . .
RUN npm run build

FROM httpd:alpine

LABEL version="1.0"
LABEL description="This is the docker image for the apache web app hosting a react app in production"
LABEL maintainer = ["braxtonbrewton@gmail.com"]

WORKDIR /usr/local/apache2/htdocs

COPY --from=build /usr/src/app/build/ .
# .htacess file controls Apache's RewriteRule sets from mod_rewrite
COPY --from=build /usr/src/app/.htaccess .
# mind-httpd.conf enables mod_rewrite by uncommenting the following conf/httpd.conf line
# LoadModule rewrite_module modules/mod_rewrite.so
# mind-httpd.conf also sets AllowOverride to All for "/usr/local/apache2/htdocs"
# this ensures .htaccess' RewriteRule sets are applied
COPY --from=build /usr/src/app/mind-httpd.conf /usr/local/apache2/conf/httpd.conf

CMD ["apachectl", "-D", "FOREGROUND"]