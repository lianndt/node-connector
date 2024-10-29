import * as dotenv from "dotenv";
import { config } from './config';

export const loadEnv = () => {
    console.log("NODE_ENV:", process.env.NODE_ENV);
    let path;
    switch(process.env.NODE_ENV) {
        case 'dev':
            path = './.env.dev';
            break;
        case 'prod':
            path = './.env.prod';
            break
        default:
            path = './.env';
    }

    console.log("PATH:", path);

    dotenv.config({ path: path });


}