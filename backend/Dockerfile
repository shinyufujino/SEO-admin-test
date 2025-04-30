# ベースイメージに PHP + Composer を選択
FROM php:8.2-cli

# 必要なパッケージのインストール
RUN apt-get update && apt-get install -y \
    git unzip curl libpng-dev libonig-dev libxml2-dev zip \
    && docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd

# Composer のインストール（公式イメージから）
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 作業ディレクトリを設定（docker-compose 側と合わせる）
WORKDIR /var/www

# Laravel の全ソースコードを先にコピー（artisan を含めるため）
COPY . .

# Laravel の依存ファイルをインストール（artisan がある状態で実行）
RUN composer install --no-dev --optimize-autoloader

# Laravel 用パーミッション設定（ストレージなど）
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache \
    && chmod -R 775 /var/www/storage /var/www/bootstrap/cache

# Laravel サーバーを起動
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
