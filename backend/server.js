// db.js
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const { MongoClient } = require('mongodb');

// Replace the following with your MongoDB connection string
const url = process.env.DB_CONNECTION_STRING;

let client;

const connectToDatabase = async () => {
    if (client) return client;

    try {
        client = new MongoClient(url);
        await client.connect();
        console.log('Connected to MongoDB');
        return client;
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        throw error;
    }
};

const getDatabase = async (dbName) => {
    console.log(dbName)
    const conn = await connectToDatabase();
    return await conn.db(dbName);
};

module.exports = { connectToDatabase, getDatabase };
