const http = require('http');

// Test-Daten für ein Drama
const drama = JSON.stringify({
    name: 'Lovely Runner',
    status: 'Schaue ich gerade',
    bewertung: 5,
    folgen: 16,
    genre: 'Romance, Fantasy, Comedy',
    beschreibung: 'Eine romantische Fantasy-Serie.',
    bild: 'lovely-runner.jpeg'
});

// Anfrage an unser Backend
const request = http.request({
    hostname: 'localhost',
    port: 3000,
    path: '/dramas',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(drama)
    }
}, response => {

    // Antwort vom Backend anzeigen
    let data = '';

    response.on('data', chunk => {
        data += chunk;
    });

    response.on('end', () => {
        console.log(data);
    });
});

// Drama an das Backend senden
request.write(drama);
request.end();