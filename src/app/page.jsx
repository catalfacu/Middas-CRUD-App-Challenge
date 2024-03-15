import React from 'react'
import { connectDB } from '@/utils/db';
import Book from '@/models/book';
import BookCard from '@/components/BookCard';

async function booksData() {
  connectDB();

  const books = await Book.find();
  
  return books;
};

async function HomePage() {
  const data = await booksData();

  return (
    <div>
      {data.map((book, id) => {
        return (
          <BookCard data={book} key={id}/>
        )
      })}
    </div>
  )
}

export default HomePage