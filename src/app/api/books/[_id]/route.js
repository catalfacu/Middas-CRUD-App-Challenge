import { NextResponse } from "next/server";
import { connectDB } from "@/utils/db";
import Book from '@/models/books';

export async function GET(request, { params }) {
    connectDB()
        const bookById = await Book.findById(params);
    return NextResponse.json(bookById);
}