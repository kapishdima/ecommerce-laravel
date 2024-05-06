FROM phusion/baseimage:focal-1.0.0
# Set Environment Variables
ENV DEBIAN_FRONTEND=noninteractive
RUN locale-gen en_US.UTF-8

ENV LANGUAGE=en_US.UTF-8
ENV LC_ALL=en_US.UTF-8
ENV LC_CTYPE=en_US.UTF-8
ENV LANG=en_US.UTF-8
ENV TERM xterm

#
#--------------------------------------------------------------------------
# Software's Installation
#--------------------------------------------------------------------------
#

# Install "PHP Extentions", "libraries", "Software's"
RUN set -eux \
    # Add the "PHP 8" ppa
    && apt-get install -y software-properties-common \
    && add-apt-repository -y ppa:ondrej/php \
    #
    #--------------------------------------------------------------------------
    # Software's Installation
    #--------------------------------------------------------------------------
    #
    && echo 'DPkg::options { "--force-confdef"; };' >> /etc/apt/apt.conf \
    # Install "PHP Extentions", "libraries", "Software's"
    && apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y --allow-downgrades --allow-remove-essential \
        --allow-change-held-packages \
        php8.2-cli \
        php8.2-common \
        php8.2-curl \
        php8.2-intl \
        php8.2-xml \
        php8.2-mbstring \
        php8.2-mysql \
        php8.2-pgsql \
        php8.2-sqlite \
        php8.2-sqlite3 \
        php8.2-zip \
        php8.2-bcmath \
        php8.2-memcached \
        php8.2-gd \
        php8.2-dev \
        php8.2-gmp \
        pkg-config \
        libcurl4-openssl-dev \
        libedit-dev \
        libssl-dev \
        libxml2-dev \
        xz-utils \
        libsqlite3-dev \
        rsync \
        sqlite3 \
        git \
        curl \
        vim \
        nano \
        tree \
        postgresql-client \
    && apt-get clean \
#####################################
# Composer:
#####################################
# Install composer and add its bin to the PATH.
&& curl -s http://getcomposer.org/installer | php \
&& echo "export PATH=${PATH}:/var/www/vendor/bin" >> ~/.bashrc \
&& mv composer.phar /usr/local/bin/composer


###########################################################################
# non-root user:
###########################################################################

# Add a non-root user to prevent files being created with root permissions on host machine.
ARG PUID=1000
ENV PUID ${PUID}
ARG PGID=1000
ENV PGID ${PGID}


RUN set -xe; \
    apt-get update -yqq
RUN apt-get install -y php-xml
# RUN apt-get install -y php8.1-xml
RUN pecl channel-update pecl.php.net
RUN groupadd -g ${PGID} fakel && \
    useradd -l -u ${PUID} -g fakel -m fakel -G docker_env && \
    usermod -p "*" fakel -s /bin/bash && \
    apt-get install -yqq \
      apt-utils


###########################################################################
# Set Timezone
###########################################################################

ARG TZ=UTC
ENV TZ ${TZ}

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

###########################################################################
# Non-root user : PHPUnit path
###########################################################################

# add ./vendor/bin to non-root user's bashrc (needed for phpunit)
USER fakel

RUN echo "" >> ~/.bashrc && \
    echo 'export PATH="/var/www/vendor/bin:$PATH"' >> ~/.bashrc

###########################################################################
# xDebug:
###########################################################################

USER root

###########################################################################
# PHP REDIS EXTENSION
###########################################################################


RUN printf "\n" | pecl -q install -o -f redis && \
    echo "extension=redis.so" >> /etc/php/8.2/mods-available/redis.ini && \
    phpenmod redis

###########################################################################
# Check PHP version:
###########################################################################


#
#--------------------------------------------------------------------------
# Final Touch
#--------------------------------------------------------------------------
#

RUN alias pest="vendor/bin/pest"

# Clean up
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
    rm /var/log/lastlog /var/log/faillog
# Set default work directory

RUN composer global require "squizlabs/php_codesniffer=*"

WORKDIR /app
