const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const PORT = process.env.PORT || 8000;
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>App Working!</h1>');
});

app.listen(PORT, () => {
    console.log('Listening on Port: ' + PORT);
});