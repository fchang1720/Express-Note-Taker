const express = require('express');
const api = require('./routes/index.js');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api)
app.use(express.static('public'));


app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('*', (req, res) => {
    res.redirect('/');
});
app.listen(PORT, () => console.log(`Example app listening at http://localhost:3000`));
