import { MongoClient } from 'mongodb';

export async function createMovie(apiUrl: string) {
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);

    try {
        await client.connect();

        const db = client.db('reviewer');
        const collection = db.collection('movies');

        await collection.insertOne({ "url": apiUrl });
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

export async function getMovies() {
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);

    try {
        await client.connect();

        const db = client.db('reviewer');
        const collection = db.collection('movies');

        return await collection.find({}).toArray();
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
