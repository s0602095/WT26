require('dotenv').config();

const client = require('./db');

// Unsere K-Dramas
const dramas = [
   {
    name: 'Lovely Runner',
    status: 'Geschaut',
    bewertung: 5,
    folgen: 16,
    genre: 'Romance, Fantasy, Comedy',
    beschreibung: 'Eine romantische Fantasy-Serie.',
    bild: 'lovely-runner.jpeg'
   },
    {
        name: 'My Bias, My Boss',
        status: 'Schaue ich gerade',
        bewertung: 9,
        folgen: 10,
        genre: 'Romance, Comedy',
        beschreibung: 'Eine romantische Geschichte im Arbeitsumfeld.',
        bild: 'My_Bias,_My_Boss.png'
    },
    {
        name: 'Agent Kim Reactivated',
        status: 'Noch offen',
        bewertung: 9,
        folgen: 12,
        genre: 'Action, Comedy',
        beschreibung: 'Eine spannende Geschichte über Agent Kim.',
        bild: 'Agend.jpeg'
    },
    {
        name: 'My Demon',
        status: 'Geschaut',
        bewertung: 9,
        folgen: 16,
        genre: 'Romance, Fantasy',
        beschreibung: 'Eine romantische Fantasy-Serie.',
        bild: 'My_Demon.jpg'
    },
    {
        name: 'Bon Appétit, Your Majesty',
        status: 'Schaue ich gerade',
        bewertung: 9,
        folgen: 12,
        genre: 'Romance, Fantasy',
        beschreibung: 'Eine Geschichte zwischen Gegenwart und Vergangenheit.',
        bild: 'bon-appetit.jpg'
    },
    {
        name: 'Business Proposal',
        status: 'Geschaut',
        bewertung: 5,
        folgen: 12,
        genre: 'Romance, Comedy',
        beschreibung: 'Eine romantische Büro-Komödie.',
        bild: 'Business_Proposal.jpg'
    },
    {
        name: 'Alchemy of Souls',
        status: 'Geschaut',
        bewertung: 9,
        folgen: 20,
        genre: 'Fantasy, Romance, Action',
        beschreibung: 'Eine Fantasy-Geschichte über Magie und Liebe.',
        bild: 'alchemy of souls.jpg'
    },
    {
        name: 'Twinkling Watermelon',
        status: 'Geschaut',
        bewertung: 5,
        folgen: 16,
        genre: 'Romance, Fantasy, Music',
        beschreibung: 'Eine Geschichte über Musik, Familie und Zeitreisen.',
        bild: 'Twinkling Watermelon.jpg'
    },
    {
        name: 'True Beauty',
        status: 'Schaue ich gerade',
        bewertung: 9,
        folgen: 16,
        genre: 'Romance, Comedy',
        beschreibung: 'Eine romantische Geschichte über Selbstvertrauen und Liebe.',
        bild: 'True Beauty.jpg'
    }
];

// Dramas in MongoDB speichern
async function speichern() {

    await client.connect();

    // Datenbank "kdrama" auswählen
    const db = client.db('kdrama');

    // Alte Dramas löschen
    await db.collection('dramas').deleteMany({});

    // Neue Dramas einfügen
    await db.collection('dramas').insertMany(dramas);

    console.log('Alle Dramas wurden gespeichert!');

    // Verbindung schließen
    await client.close();
}

speichern();