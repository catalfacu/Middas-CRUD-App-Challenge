import { Schema, model, models } from "mongoose";

//Creo el esquema book para cada libro que quiera guardar en la base de datos
const bookSchema = new Schema({
    book_name: {
        type: String,
        required: [true, 'El titulo es requerido'],
        unique: true,
        trim: true
    },
    autor: {
        type: String,
        required: [true, 'El autor del libro es requerido'],
        unique: false
    },
    release_year: {
        type: Number,
        required: [true, 'El año de lanzamiento es requerido'],
        unique: false,

    },
    genre: {
        type: String,
        required: [true, 'El genero es requerido']
    },
    isFavorite: {
        type: Boolean,
        default: false
    }

})

// Chequeo que exista el modelo 'Book' primero
//Exporto el modelo 'Book' para utilizarlo en otras partes de la app
export default models.Book || model('Book', bookSchema);
