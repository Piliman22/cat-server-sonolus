import axios from "axios";
import * as fs from 'fs';
import { SETTING } from "../setting.js";

// The Cat APIのエンドポイントURL
const apiUrl = 'https://api.thecatapi.com/v1/images/search';

export const fetchCatImages = async (count: number) => {
    try {
        const response = await axios.get(apiUrl, {
            headers: { 'x-api-key': SETTING.API_KEY },
            params: { limit: count }
        });

        const catImagesData = response.data.map((image: any) => ({
            url: image.url,
            filename: image.url.split('/').pop()
        }));

        fs.writeFileSync('cat_images.json', JSON.stringify(catImagesData, null, 2));
    } catch (e) {
        console.error("エラー：", e);
    }
}

export const load_json = (filepath: string) => {
    try {
        const data = fs.readFileSync(filepath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error("JSONファイルの読み込みエラー:", error);
        return null;
    }
}