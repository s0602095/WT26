const express = require('express');
const client = require('./db');
const { ObjectId } = require('mongodb');

const router = express.Router();

// Test, ob das Backend funktioniert
router.get('/', async (req, res) => {
    res.send({ message: 'K-Drama Backend funktioniert!' });
});

// Alle Dramas aus MongoDB abrufen
router.get('/dramas', async (req, res) => {
    await client.connect();

    // Datenbank "kdrama" auswählen
    const db = client.db('kdrama');

    // Alle Dramas aus der Collection "dramas" holen
    const dramas = await db.collection('dramas').find().toArray();

    // Dramas zurückgeben
    res.send(dramas);
});

// Neues Drama in MongoDB speichern
router.post('/dramas', async (req, res) => {
    await client.connect();

    // Datenbank "kdrama" auswählen
    const db = client.db('kdrama');

    // Drama in die Collection "dramas" speichern
    const result = await db.collection('dramas').insertOne(req.body);

    // Ergebnis zurückgeben
    res.send(result);
});

// Drama bearbeiten
router.put('/dramas/:id', async (req, res) => {
    await client.connect();

    // Datenbank "kdrama" auswählen
    const db = client.db('kdrama');

    // ID des Dramas auswählen
    const id = new ObjectId(req.params.id);

    // Drama mit neuen Daten aktualisieren
    const result = await db.collection('dramas').updateOne(
        { _id: id },
        { $set: req.body }
    );

    // Ergebnis zurückgeben
    res.send(result);
});

module.exports = router;