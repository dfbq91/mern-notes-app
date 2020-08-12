const { Schema, model } = require('mongoose');

const userSchema = new Schema({ // Crea el esquema de BD.
    username: {
	type: String,
	required: true, // Campo requerido. Obligatorio
	trim: true, // Limpia dobles espacios
	unique: true // Nombre de usuario debe ser único
    }
}, {
    timestamps: true,
});

// Nombre del modelo: User. Utilizará noteSchema, el esquema de BD creado.
module.exports = model('User', userSchema);
