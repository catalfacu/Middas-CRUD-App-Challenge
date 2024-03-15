import React from 'react'
import Link from 'next/link';

function NavBar() {
  return (
    <nav className='bg-slate-700 text-white flex justify-between items-center p-3'>
        <h1>Middas Library</h1>
        <ul className='flex justify-end gap-5'>
            <Link href='/'> Home </Link>
            <Link href='/books/favorites'> Favoritos </Link>
            <Link href='/books/new'> Crear+ </Link>
        </ul>
    </nav>
  )
}

export default NavBar