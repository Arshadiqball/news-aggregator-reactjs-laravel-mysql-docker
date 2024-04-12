FROM php:8.1-fpm

WORKDIR /var/www/html

# Install dependencies
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    git \
    curl

# Install PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install gd pdo pdo_mysql mbstring exif pcntl bcmath xml

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy Laravel files
COPY . .

# Install Composer dependencies
RUN composer install --ignore-platform-reqs --no-interaction --no-plugins --no-scripts --prefer-dist

EXPOSE 8000

CMD php artisan serve --host=0.0.0.0 --port=8000
