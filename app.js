const books = require('./data/books.json');
const express = require("express");
const app = express(); // Inicializar servidor
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get('/all', (req, res) => {
    res.json(books);
});

app.get('/first', (req, res) => {
    res.json(books[0]);
});

app.get('/last', (req, res) => {
    res.json(books[books.length - 1]);
});

app.get('/middle', (req, res) => {
    res.json(books[books.length / 2]);
});

app.get('/author/dante-alighieri', (req, res) => {
    const found = books.find((book) => book.author === 'Dante Alighieri');
    res.json(found.title);
});

app.get('/country/charles-dickens', (req, res) => {
    const found = books.find((book) => book.author === 'Charles Dickens');
    res.json(found.country);
});

app.get('/year&pages/cervantes', (req, res) => {
    const found = books.find((book) => book.author === 'Miguel de Cervantes');
    res.json({pages: found.pages, year: found.year});
});

app.get('/country/count/spain', (req, res) => {
    const found = books.filter((book) => book.country === 'Spain');
    res.json(found.length);
});

app.get('/country/at-least/germany', (req, res) => {
    const found = books.find((book) => book.country === 'Germany');
    if (found) {
        res.json(true);
    } else {
        res.json(false);
    }
});

app.get('/pages/all-greater/200', (req, res) => {
    const found = books.filter((book) => book.pages > 200);
    if (found.length === books.length) {
        res.json(true);
    } else {
        res.json(false);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});