import express from 'express';

import { createMovie, getMovies } from './database';

const app = express();

app.get('/movies', async (request, response) => {
    await createMovie('Joesley');
    await createMovie('Josnei');
    const movies = await getMovies();

    return response.json(movies);
});

app.listen(3333);
