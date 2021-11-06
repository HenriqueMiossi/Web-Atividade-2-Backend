import express from 'express';

import { createReview, getMovies } from './database';

const app = express();

app.get('/movies', async (request, response) => {
    // await createMovie('Joesley');
    // await createMovie('Josnei');
    const movies = await getMovies();

    return response.json(movies);
});

app.post('/movies/:id', async (request, response) => {
    await createReview(request.params.id, 'josnei');

    return response.status(200).send();
});

app.listen(3333);
