import { loadEnv } from "./config/env";
loadEnv();
import 'reflect-metadata';
import { AppDataSource} from "./config/database";
import app from './app';


app.listen(process.env.PORT, async () => {
   try {
      console.info(`Server listening on port ${process.env.PORT}`);
      await AppDataSource.initialize();
      console.info('Connected to mysql');
     
   } catch(error) {
      console.error('Error connecting to database');
      console.error(error);
   }
});





