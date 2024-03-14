import { NextResponse } from "next/server";
import { connectDB } from "@/utils/db";
import Book from '@/models/books';

//Uso esta función para obtener los datos de un libro en especifico mediante "params", que lee la url y obtiene el dato que necesito 
export async function GET(request, { params }) {
    try {
        connectDB()
        const bookById = await Book.findById(params);
        
//Aca estoy validando si se encontro el libro que buscaba o no
        if(!bookById) return NextResponse.json({
            message: "Tarea no encontrada"
        }, {status: 404})
    
        return NextResponse.json(bookById);

    } catch (error) {
        return NextResponse.json(error.message, {status: 400})
    }
};
