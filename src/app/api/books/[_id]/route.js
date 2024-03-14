import { NextResponse } from "next/server";
import { connectDB } from "@/utils/db";
import Book from '@/models/books';

//Uso esta función para obtener los datos de un libro en especifico mediante "params", que lee la url y obtiene el dato que necesito 
export async function GET(request, { params }) {
    connectDB()
        const bookById = await Book.findById(params);
    return NextResponse.json(bookById);
};
