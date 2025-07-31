// 基礎的なNode.jsとExpressのセットアップ
// SonolusのExpressミドルウェアを使用して、Sonolusサーバーを構築

import express from "express";
import path from "path";
import morgan from "morgan";

import { Sonolus } from "@sonolus/express";
import { sonolus_install } from "./sonolus/index.js";
import { fetchCatImages } from "./cat/fetch.js";
import { SETTING } from "./setting.js";

const app = express();
export const sonolus = new Sonolus({
    address: `http://localhost:${SETTING.PORT}`,
})
app.use(morgan('dev')); // ログ出力のためのミドルウェア
app.use(sonolus.router);
app.use('/data', express.static(path.join(process.cwd(), 'data')));

const main = async () => {
    await fetchCatImages(SETTING.LIMIT_IMAGE_COUNT); // 画像取得を待つ
    sonolus_install(); // 画像取得後にインストール
    app.listen(SETTING.PORT, () => {
        console.log(`🚀サーバー起動${SETTING.PORT}`);
    });
};

// メイン関数を実行
main();