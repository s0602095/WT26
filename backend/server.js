require('dotenv').config();

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = 3000;

// CORS für Angular erlauben
app.use(cors());

// JSON-Daten erlauben
app.use(express.json());

// Routes verwenden
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server started and listening on port ${PORT} ...`);
});