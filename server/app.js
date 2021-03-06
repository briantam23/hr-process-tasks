const express = require('express');
const app = express();
const path = require('path');


app.use('/public', express.static(path.join(__dirname, '../public')));
app.use('/data', express.static(path.join(__dirname, '../data')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));


module.exports = app;