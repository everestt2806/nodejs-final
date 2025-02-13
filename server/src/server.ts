import express, { Request, Response } from 'express'
import { CONNECT_DB, CLOSE_DB } from './config/mongodb'
import exitHook from 'async-exit-hook'
import { env } from './config/environment'


const START_SERVER = async (): Promise<void> => {
  try {
    const app = express();
    const port: number = parseInt(env.APP_PORT);

    app.get('/', (req: Request, res: Response): void => {
      res.end('Backend Server running...');
    });

    app.listen(port, env.APP_HOST, (): void => {
      console.log(`${env.AUTHOR}'s server running at http://${env.APP_HOST}:${port}/`);
    });

    exitHook(async () => {
      console.log('Disconnecting from MongoDB...');
      await CLOSE_DB();
      console.log('Disconnected from MongoDB!');
    });
  } catch (error) {
    console.error('Error starting server:', error);
    throw error;
  }
};

(async () =>{
  try{
    console.log('1. Connecting to MongoDB...')
    await CONNECT_DB()
    console.log('2. Connected to MongoDB')

    START_SERVER()
  }
  catch(error){
    console.error(error)
    process.exit(0)
  }
})()

// CONNECT_DB()
//   .then(async () => {
//     console.log('Connected to MongoDB!')
//     const db = GET_DB()
//     const collections = await db.listCollections().toArray()
//     console.log(collections);
//     START_SERVER()
//   })
//   .catch((error: Error): void => {
//     console.error(error)
//     process.exit(0)
//   })

