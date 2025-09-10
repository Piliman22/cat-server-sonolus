# Cat server sonolus!

このリポジトリは、**Sonolus** の background 機能を使って猫画像を表示するチュートリアルサーバーです。  
TypeScriptで書かれており、@sonolus/express を利用しています。

## 必要なもの

- Node.js（推奨: v18以上）
- npm（Node.jsに同梱）

## セットアップ手順

1. **リポジトリをクローン**

   ```sh
   git clone https://github.com/yourname/cat-sonolus-server.git
   cd cat-sonolus-server
   ```

2. **依存パッケージのインストール**

   ```sh
   npm install
   ```

3. **環境変数の設定**

   `.env.example` を参考に `.env` ファイルを作成し、The Cat API の APIキーを設定してください。

   ```
   PORT=8080
   API_KEY=あなたのCatAPIキー
   ```

   CatAPIキーは https://thecatapi.com/ で無料取得できます。

4. **TypeScriptでビルド**

   ```sh
   npm run build
   ```

5. **サーバーの起動**

   ```sh
   npm start
   ```

   起動後、`http://localhost:8080` でSonolusサーバーとしてアクセスできます。

## ディレクトリ構成

- `src/` : TypeScriptのソースコード
- `data/` : Sonolus用データファイル
- `cat_images.json` : 猫画像のURLリスト（自動生成）

## 主なファイル

- [`src/index.ts`](src/index.ts)：ExpressとSonolusサーバーの起動処理
- [`src/cat/fetch.ts`](src/cat/fetch.ts)：CatAPIから画像を取得
- [`src/sonolus/background/data.ts`](src/sonolus/background/data.ts)：猫画像を背景アイテムとして登録
- [`src/setting.ts`](src/setting.ts)：環境変数の管理

## よくある質問

### Q. TypeScriptのコードはどこで編集できますか？
A. `src/` フォルダ内の `.ts` ファイルを編集してください。

### Q. CatAPIの画像数を変更したい
A. [`SETTING.LIMIT_IMAGE_COUNT`](src/setting.ts) を変更してください。

---

## ライセンス

MIT License
