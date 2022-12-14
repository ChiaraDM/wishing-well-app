const express = require('express');
const cors = require('cors');
const wishes = require('./wishes');
// Create the app
const app = express();

// Allow requests from other origins
app.use(cors());

// Tell express to read the body of POST requests
app.use(express.json());

// Set app the server roots
app.get('/', (req, res) => {
    res.send('Welcome to my Wishing Well App');
});

app.get('/wishes', (req, res) => {
    res.send(wishes);
})

app.post('/wishes', (req, res) => {
    const newWish = req.body;
    newWish['id'] = wishes.length;
    wishes.push(newWish);
    res.status(201).send(newWish);
})

module.exports = app;