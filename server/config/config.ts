// importing relevant modules
import dotenv from 'dotenv';

// import relevant types
import { defaultConfigTypes } from '../types/config.types';

export const isProd: boolean = process.env.NODE_ENV === 'production';
export const isDevelopment: boolean = process.env.NODE_ENV === 'development';
export const PORT: number = parseInt(process.env.PORT || '8000', 10);

dotenv.config();

interface CorsSettings {
  credentials: boolean;
  origin: string[];
  methods: string[];
}

export const corsSettings: CorsSettings = isProd
  ? {
      credentials: true,
      origin: [
        'https://google.com',
      ],
      methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    }
  : {
      credentials: true,
      origin: [
        'http://localhost:3000',
        'http://localhost:3001',
        'http://localhost:5173',
        'https://www.test.google.com',
      ],
      methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    };


// defaultConfig object - this contains any config strings || numbers
export const defaultConfig: defaultConfigTypes = {
   PORT: Number(process.env.PORT),
   FLW_PUBLIC_KEY: String(process.env.FLW_PUBLIC_KEY),
   FLW_SECRET_KEY: String(process.env.FLW_SECRET_KEY),
   MERCHANT_ADDRESS: String(process.env.MERCHANT_ADDRESS),
   DATABASE_URL: String(process.env.DATABASE_URL)
}

