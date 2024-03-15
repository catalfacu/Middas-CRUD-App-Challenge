import React from 'react'
import Link from 'next/link'

function BookCard({ data }) {
  return (
    <article className="bg-slate-500 m-3 w-40 h-56 flex justify-center flex-col items-center rounded-md hover:bg-red-800">
      <Link href={`/books/${data._id}`}>
        <h2 className="text-2xl text-gray-200 py-3">{data.book_name}</h2>
      </Link>
      <h4>{data.autor}</h4>
      <h5>{data.release_year}</h5>
      <h6>{data.genre}</h6>
    </article>
  );
}

export default BookCard