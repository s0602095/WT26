require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', routes);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB verbunden');

        app.listen(PORT, () => {
            console.log(`Server läuft auf Port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('MongoDB Fehler:', error);
    });