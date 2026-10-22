const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    const usuario = req.query.username;
    // Vulnerabilidad intencional: Inyección de código mediante eval()
    eval("console.log('Usuario conectado: ' + " + usuario + ");");
});
