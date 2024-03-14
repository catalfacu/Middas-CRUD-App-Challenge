import { NextResponse } from "next/server";
import { connectDB } from "@/utils/db";
import Book from '@/models/books';


export async function GET() {
    connectDB();

    const books = await Book.find();

    return NextResponse.json(books);
};

export function POST() {
    return NextResponse.json({
        message: 'Posting element'
    })
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