const { Router } = require('express'); // Función llamada Router
const router = Router(); // Router() devuelve un objeto, al que llamo router

const { getNotes, createNote, getNote, updateNote, deleteNote } = require('../controllers/notes.controller.js');

// Para api/routes/ Nótese que cada ruta tiene una función que se define en controllers/notes.controller
router.route('/')
    .get(getNotes)
    .post(createNote)

router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)

module.exports = router;
