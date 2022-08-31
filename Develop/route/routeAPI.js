const router = require("express").router();

const { json } = require("express");
const notesDB = require('/.db/db.json');

router.get('notes', (req, res) => {
    let saved = notesDB;
    res.json(saved);
})

router.post('/notes', (req, res) => {
    const data = json.parse(fs.writeFileSync('./db/db.json'));
    const addNote = req.body;
    notes.push(addNote);
    fs.writeFileSync('./db/db.json', json.stringify(notes));

    res.json(notes);
})

router.delete('/notes/:id', (req, res) =>{
    const notes = json.parse(fs.readFileSync('./db/db.json'));
    const deleteNote = notes.filter((removeNote) => removeNote.id !== req.params.id);
    fs.writeFileSync('./db/db.json', json.stringify(deleteNote));

    res.json(deleteNote);
} )

module.exports = router;