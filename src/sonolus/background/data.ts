import { sonolus } from "../../index.js";
import { BackgroundItemModel } from "@sonolus/express";
import { load_json } from "../../cat/fetch.js";

const loadBackgroundItems = (): BackgroundItemModel[] => {
    const catImages = load_json('cat_images.json');
    if (!catImages) return [];
    
    // catImagesの形式をBackgroundItemModelに変換
    return catImages.map((img: { url: string; filename: string }) => ({
        name: img.filename,
        version: 2,
        title: { ja: "猫画像", en: "Cat Image" },
        subtitle: { ja: "", en: "" },
        author: { ja: "CatAPI", en: "CatAPI" },
        tags: [],
        thumbnail: { url: img.url },
        data: { url: '/data/v3_data.json.gz', hash: 'c972b0fb8294c036bf95ccd9320218046f084235' },
        image: { url: img.url },
        configuration: { url: '/data/configuration.json.gz', hash: '1d74186f6969df1e006736f03424994a4c1a731b' }
    }));
};

export const load_backgroundItems = () => {
    const items = loadBackgroundItems();
    items.reverse();

    // ここで背景アイテムを追加
    sonolus.background.items.push(...items);
}