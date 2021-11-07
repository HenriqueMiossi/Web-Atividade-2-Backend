import { MongoClient, ObjectId } from 'mongodb';

export async function createReview(id: string, review: string) {
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);

    try {
        await client.connect();

        const db = client.db('reviewer');
        const collection = db.collection('movies');
        
        if (await collection.findOne({ "movieId": id }) == null) {
            await collection.insertOne({ "movieId": id, "reviews": [] });
            await collection.updateOne({ "movieId": id }, { $push: { "reviews": review } });
        }
        else {
            await collection.updateOne({ "movieId": id }, { $push: { "reviews": review } });
        }
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

export async function getMovies(id: string) {
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);

    try {
        await client.connect();

        const db = client.db('reviewer');
        const collection = db.collection('movies');

        return await collection.findOne({ "movieId": id });
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
