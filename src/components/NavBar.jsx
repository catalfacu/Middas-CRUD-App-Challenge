import React from 'react'

function NavBar() {
  return (
    <nav className='bg-slate-700 text-white flex justify-between items-center p-3'>
        <h2>Middas Library</h2>
        <ul className='flex justify-end gap-5'>
            <li>Home</li>
            <li>Favoritos</li>
            <li>Crear+</li>
        </ul>
    </nav>
  )
}

export default NavBar