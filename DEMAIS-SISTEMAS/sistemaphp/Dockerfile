FROM php:7.0-apache

RUN sed -i s/deb.debian.org/archive.debian.org/g /etc/apt/sources.list
RUN sed -i 's|security.debian.org|archive.debian.org/|g' /etc/apt/sources.list
RUN sed -i '/stretch-updates/d' /etc/apt/sources.list

RUN apt-get update && apt-get install -y gnupg2 wget

RUN echo "deb http://packages.cloud.google.com/apt gcsfuse-stretch main" | tee /etc/apt/sources.list.d/gcsfuse.list
RUN curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -

RUN apt-get update && apt-get install -y libpq-dev libcurl3-dev libxml2-dev libjpeg-dev gnupg2 gcsfuse \
    libmagickwand-dev libpng-dev htmldoc openssl imagemagick libssh2-1-dev libssh2-1 zlib1g-dev libmcrypt-dev &&\
   apt-get install --no-install-recommends --assume-yes --quiet ca-certificates curl git &&\
   rm -rf /var/lib/apt/lists/*

RUN pecl install xdebug-2.5.5 imagick ssh2-1.3 && docker-php-ext-enable xdebug imagick ssh2
RUN docker-php-ext-install pgsql pdo pdo_pgsql curl xml calendar gd soap zip mcrypt sockets

RUN docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install gd

RUN rm -rf /var/log/apache2/access.log

ARG ENV=dev
COPY config/${ENV}/php.ini /usr/local/etc/php/php.ini
COPY config/${ENV}/sistema.conf /etc/apache2/conf-available/sistema.conf
COPY config/${ENV}/htaccess /var/www/html/.htaccess
COPY config/${ENV}/expire.conf /etc/apache2/conf-available/expire.conf
COPY config/${ENV}/favicon.ico /var/www/html/favicon.ico
COPY config/${ENV}/php_browscap.ini /usr/local/etc/php/php_browscap.ini

# Copia os fontes
COPY . /var/www/html/
RUN rm -rf /var/www/html/temp && rm -rf /var/www/html/config/* && rmdir /var/www/html/config

RUN mkdir -p /var/www/html/temp 
RUN chmod 777 /var/www/html/temp 
EXPOSE 80
