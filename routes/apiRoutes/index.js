const router = require('express').Router();
const { createNoteId, createNewNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../db/db');

router.get('/db', (req, res) => {
  let results = notes;
  res.json(results);
});

router.post('/db', (req, res) => {
  if (!validateNote(req.body)) {
    res.status(400).send('This note is not properly formatted');
  } else {
    const newNote = createNoteId(req.body, notes);
    res.json(newNote);
  }
});

module.exports = router;