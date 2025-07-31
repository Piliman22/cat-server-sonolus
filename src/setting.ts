// dotenvの設定の読み込み

import dotenv from 'dotenv';

dotenv.config();

export const SETTING = {
    PORT: process.env.PORT || 8080,
    API_KEY: process.env.API_KEY || '',
    LIMIT_IMAGE_COUNT: 100
}