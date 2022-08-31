const express = require('express');
const path = require('path');
const fs = require('fs');
const notesDB = require('/.db/db.json');

const PORT = process.env.PORT || 3000;

const app = express();

// requiring routes
const apiRoute = require("./Develop/route/routeAPI");
const htmlRoute = require("./Develop/route/routeHTML");

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));

app.use('/api', apiRoute);
app.use('/', htmlRoute);

// GET Route for homepage
app.get('/index', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
); 

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) =>
res.json(notesDB));

app.post('/api/notes', (req, res) => {
const {body} = req;
notesDB.push(body);
console.log(body);
res.json(notesDB)});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
