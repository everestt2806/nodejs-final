import dotenv from 'dotenv';
dotenv.config();


// config/environment.ts
interface EnvConfig {
    MONGODB_URI: string;
    DATABASE_NAME: string;
    APP_HOST: string;
    APP_PORT: string;
    AUTHOR: string;
}

export const env: EnvConfig = {
    MONGODB_URI: process.env.MONGODB_URI || 'default_uri',
    DATABASE_NAME: process.env.DATABASE_NAME || 'default_db',
    APP_HOST: process.env.APP_HOST || 'localhost',
    APP_PORT: process.env.APP_PORT || '3000',
    AUTHOR: process.env.AUTHOR || 'Unknown'
};
