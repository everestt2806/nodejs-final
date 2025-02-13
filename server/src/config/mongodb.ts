import { MongoClient, ServerApiVersion, Db } from "mongodb";
import { env } from './environment'

let databaseInstance: Db | null = null;

// MongoDB client configuration
const mongoClientInstance: MongoClient = new MongoClient(env.MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});

/**
 * Connects to MongoDB database
 * @throws {Error} If connection fails
 */
export const CONNECT_DB = async (): Promise<void> => {
    try {
        await mongoClientInstance.connect();
        databaseInstance = mongoClientInstance.db(env.DATABASE_NAME);
    } catch (error) {
        console.error('Database connection error:', error);
        throw error;
    }
};

/**
 * Returns the database instance
 * @returns {Db} MongoDB database instance
 * @throws {Error} If database is not connected
 */
export const GET_DB = (): Db => {
    if (!databaseInstance) throw new Error('Must connect to Database first!');
    return databaseInstance;
};


export const CLOSE_DB = async (): Promise<void> => {
    try {
        await mongoClientInstance.close();
        databaseInstance = null;
    } catch (error) {
        console.error('Error closing database connection:', error);
        throw error;
    }
};
