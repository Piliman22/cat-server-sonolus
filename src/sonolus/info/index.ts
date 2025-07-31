import { sonolus } from "../../index.js";

export const server_info = () => {
    // Sonolusサーバーの情報を設定
    // 最初に開いたときに表示されるところ
    sonolus.serverInfoHandler = () => {
        return {
            title: { en: "Cat Server" },
            description: { en: "A server for Cat images" },
            buttons: [
                { type: 'background' },
                { type: 'configuration' }
            ],
            configuration: {
                options: []
            }
        }
    }
}