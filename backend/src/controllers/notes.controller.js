const Note = require('../models/Note'); //Note como modelo de base de datos

const notesController = {};

notesController.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
}

notesController.createNote = async (req, res) => {
    // req.body retorna un objeto con el json enviado en el POST request. Lo desestructuro para obtener los valores.
    const { title, content, date, author } = req.body;
    const newNote = new Note({
	title: title,
	content: content,
	date: date,
	author: author
    });
    await newNote.save();
    res.json('Note saved')
}

notesController.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note)
}

notesController.updateNote = async (req, res) => {
    const {title, author, content} = req.body;
    await Note.findOneAndUpdate(req.params.id, {
	title,
	author,
	content
    });
    res.json({message: 'Note updated'})
}

notesController.deleteNote = async (req, res) => {
    await Note.findOneAndDelete(req.params.id);
    res.json({message: 'Note deleted'})
}

module.exports = notesController
