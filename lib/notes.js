const fs = require('fs');
const path = require('path');

const idAutoIncrement = require('id-auto-increment');


function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notesArray }, null, 2)
  );
  return note;
}

async function createNoteId(body, notesArray) {
  const id = await idAutoIncrement();
  body.id = id;
  console.log(notesArray);
  createNewNote(body, notesArray);
}

function validateNote(note) {
  if (!note.title || typeof note.title !== 'string') {
    return false;
  }
  if (!note.text || typeof note.text !== 'string') {
    return false;
  }
  return true;
}

module.exports = {
  createNoteId,
  createNewNote,
  validateNote
};