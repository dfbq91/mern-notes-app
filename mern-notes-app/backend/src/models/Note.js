const { Schema, model } = require('mongoose');

const noteSchema = new Schema({ // Crea el esquema de BD.
    title: String,
    content: { type: String, required: true },
    author: String,
    date: { type: Date, default: Date.now }
}, {
    timestamps: true,
});

// Nombre del modelo: Note. Utilizará noteSchema, el esquema de BD creado.
module.exports = model('Note', noteSchema); // Aquí se crea la colección llamada Note.
