import React from 'react'
import { connectDB } from '@/utils/db';
import Book from '@/models/book';

async function booksData() {
  connectDB();

  const books = await Book.find();
  
  return books;
};

async function HomePage() {
  const data = await booksData();

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default HomePage