FROM python:3.8.5-alpine

RUN apk --update add libxml2-dev libxslt-dev libffi-dev gcc musl-dev libgcc openssl-dev curl
RUN apk add jpeg-dev zlib-dev freetype-dev lcms2-dev openjpeg-dev tiff-dev tk-dev tcl-dev

RUN mkdir -p /usr/src/app/rest_api
WORKDIR /usr/src/app/rest_api

ADD . /usr/src/app/rest_api

RUN pip install -r requirements.txt