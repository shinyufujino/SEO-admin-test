FROM node:18-alpine

WORKDIR /app

# 依存ファイルをコピーしてインストール
COPY package.json package-lock.json* ./
RUN npm install

# ソースコードをコピー
COPY . .

# ポート3000を開放
EXPOSE 3000

# 開発用サーバーを起動
CMD ["npm", "run", "dev"]