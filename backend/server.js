const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;

app.use(express.static(path.join(__dirname, '../frontend')));

app.listen(PORT);
