const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.get('/wikipediaData', async (req, res) => {
    try {
        const response = await fetch('https://en.wikipedia.org/wiki/List_of_open-source_films');
        const data = await response.text();
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from Wikipedia');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
