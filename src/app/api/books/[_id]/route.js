import { NextResponse } from "next/server";
import { connectDB } from "@/utils/db";
import Book from '@/models/books';

//Uso esta función para obtener los datos de un libro en especifico mediante "params", que lee la url y obtiene el dato que necesito 
export async function GET(request, { params }) {
    try {
        connectDB()
        const bookById = await Book.findById(params._id);
        
//Aca estoy validando si se encontro el libro que buscaba o no
        if(!bookById) return NextResponse.json({
            message: "Tarea no encontrada"
        }, {status: 404})
    
        return NextResponse.json(bookById);

    } catch (error) {
        return NextResponse.json(error.message, {status: 400})
    }
};


//Utilizo esta función para poder editar datos del libro que busque mediante su id
export async function PUT(request, {params}) {
    try {
        const data = await request.json();
        const bookUpdated = await Book.findByIdAndUpdate(params._id, data, {new: true});

//Si no se encuentra el libro buscado se ejecuta esta sentencia if
        if(!bookUpdated) return NextResponse.json({message: "Tarea no encontrada"}, {status: 404});

        return NextResponse.json(bookUpdated);

    } catch (error) {
        return NextResponse.json(error.message, {status: 400})
    }
};


//Esta función busca por ID un libro y si existe lo elimina de la base de datos
export async function DELETE(request, {params}) {
    try {
    const bookDeleted = await Book.findByIdAndDelete(params._id);

//Sino encuentra el libro ejecuta este if
    if(!bookDeleted) return NextResponse.json({message:"Libro no encontrado"}, {status: 404});
        
    return NextResponse.json({message: "Tarea eliminada con exito"});
    } catch (error) {
       
        return NextResponse.json(error.message, {status: 400})
    }
};