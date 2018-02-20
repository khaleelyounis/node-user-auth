const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const {
    mongoURI
} = require('./config');
const authRoutes = require('./routes/auth');
const cors = require('cors');
const path = require('path');
const bcyrpt = require('bcrypt-nodejs');
const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static(path.resolve(__dirname, 'client')));

authRoutes(app);

mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to the database!');
    })
    .catch(err => {
        console.log('Error connecting to Mongo DB: ', err.message);
    })

app.get('/test', (req, res) => {
    res.send('<h1>App Working!</h1>');
});

app.post('/test-post', (req, res) => {
    const dataToSend = {
        message: 'Received data. Sending data back',
        received: req.body
    };
    res.send(dataToSend);
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});

app.listen(PORT, () => {
    console.log('Listening on Port: ' + PORT);
});