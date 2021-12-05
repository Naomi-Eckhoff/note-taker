const router = require('express').Router();
const { createNoteId, createNewNote, validateNote } = require('../../lib/notes');
const { notesArray } = require('../../db/db');

router.get('/db', (req, res) => {
  let results = notesArray;
  res.json(results);
});

router.post('/db', (req, res) => {
  if (!validateNote(req.body)) {
    res.status(400).send('This note is not properly formatted');
  } else {
    console.log(notesArray);
    const newNote = createNoteId(req.body, notesArray);
    res.json(newNote);
  }
});

module.exports = router;