
require('dotenv').config();

const { MongoClient } = require('mongodb');

// Verbindung zu MongoDB mit der Adresse aus .env
const client = new MongoClient(process.env.MONGODB_URI);

module.exports = client;

