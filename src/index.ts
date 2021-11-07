import express from 'express';
import cors from 'cors';

import { createReview, getMovies } from './database';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/movies/:id', async (request, response) => {
    const movies = await getMovies(request.params.id);

    return response.json(movies);
});

app.post('/movies/:id', async (request, response) => {
    const review: string = request.body.review;
    await createReview(request.params.id, review);

    return response.status(200).send();
});

app.listen(3333);
