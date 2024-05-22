const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from App Engine!');
});

app.get('/test', (req, res) => {
    res.send('Hello test!');
});

app.get('/test-2', (req, res) => {
    res.send('Hello test2!');
});

app.get('/test-3', (req, res) => {
    res.send('Hello test3!');
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
