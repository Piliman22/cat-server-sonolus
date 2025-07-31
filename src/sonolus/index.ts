import { server_info } from "./info/index.js"
import { load_backgroundItems } from './background/data.js'

// Sonolusのインストール処理
// 今回の場合は、背景アイテムと、サーバーのホームメニューの情報
// 場合によっては譜面やスキンなどの設定も自分で書く必要がある。
// sonolusディレクトリの中にlevelsやskinsやengineなどのディレクトリを作成して作ることを推奨
export const sonolus_install = () => {
    server_info();
    load_backgroundItems();
}