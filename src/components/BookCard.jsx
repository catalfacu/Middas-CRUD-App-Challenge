import React from 'react'

function BookCard({ data }) {
  return (
    <article className='bg-slate-500 m-3 w-40 h-48 flex justify-center flex-col items-center rounded-md'>
        <h2 className='text-2xl text-gray-200 py-3'>{data.book_name}</h2>
        <h4>{data.autor}</h4>
        <h5>{data.release_year}</h5>
    </article>
  )
}

export default BookCard