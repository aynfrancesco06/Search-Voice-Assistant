FROM nginx:alpine

WORKDIR /usr/src/app

LABEL maintainer="deadly.spotnick@gmail.com"

COPY . /usr/share/nginx/html

