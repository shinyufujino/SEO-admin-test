# ベースイメージ（Node.js）
FROM node:18

# 作業ディレクトリを設定
WORKDIR /app

# package.json と package-lock.json をコピー
COPY package.json package-lock.json* ./

# 依存関係のインストール
RUN npm install

# アプリケーションコードをコピー
COPY . .

# ポート3000を開ける
EXPOSE 3001

# 開発サーバーを起動
CMD ["npm", "run", "dev"]