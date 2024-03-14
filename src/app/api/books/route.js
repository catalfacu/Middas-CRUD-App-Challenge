import { NextResponse } from "next/server";
import { connectDB } from "@/utils/db";
import Book from '@/models/books';

//Funcion GET que busca todos los registro de la coleccion Book en la base de datos
export async function GET() {
    connectDB();

    const books = await Book.find();

    return NextResponse.json(books);
};


//Función POST que agrega un nuevo documento a la colección books de la base de datos
export async function POST(request) {
    const data = await request.json();
    const newBook = new Book(data);
    const savedBook = await newBook.save();
    
    return NextResponse.json(savedBook);
};
export function PUT() {
    return NextResponse.json({
        message: 'Posting element'
    })
};
export function DELETE() {
    return NextResponse.json({
        message: 'Posting element'
    })
};