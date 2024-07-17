const express = require("express");
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
app.get('/data', (req, res) => {
    const dbPath = path.join(__dirname, '..', 'db.json');
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading database file');
            return;
        }
        res.json(JSON.parse(data));
    });
});
app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;