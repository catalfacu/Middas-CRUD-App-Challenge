"use client"

import {useEffect, useState} from 'react';
import { useRouter, useParams } from 'next/navigation';

function Form() {

//Creo este estado para capturar los datos del libro
let [newBook, setNewBook] = useState({
    book_name: "",
    autor: "",
    release_year: null,
    genre: ""
});
const router = useRouter();
const params = useParams();

//Funcion para traer los datos del libro
const getBook = async () => {
  const res = await fetch(`/api/books/${params._id}`);
  const data = await res.json()
  
  setNewBook({
    book_name: data.book_name,
    autor: data.autor,
    release_year: data.release_year,
    genre: data.genre
  })
};

//Con esta función hago la pesticion POST a la api
const createBook = async () => {
    try {
        const res = await fetch("/api/books", {
            method: "POST",
            body: JSON.stringify(newBook),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();

        //Aqui chequeo que la peticion haya sido exitosa, si lo es nos redirije nuevamente al home
        if(res.status === 200) {
          router.push("/");
          router.refresh();
        }
      } catch (error) {
        console.log(error)
      }
    };

//Funcion para actualizar los datos de los libros
const updateBook = async () => {
  const res = await fetch(`/api/books/${params._id}`, {
    method: "PUT",
    body: JSON.stringify(newBook),
    headers: {
      "Content-Type" : "application/json",
    }
  })
  const data = await res.json();
  router.push("/")
  router.refresh()
};
    
//función para eliminar libros
  const handleDelete = async () => {
      if(window.confirm("Seguro que quiere eliminar esta tarea?")) {
        const res = await fetch(`/api/books/${params._id}`, {
          method: "DELETE"
        })
        router.push('/')
        router.refresh()
      }
    };

//Con esta funcion realizo el posteo de un nuevo libro
const handleSubmit = async(e) => {
  e.preventDefault();

  if(!params._id) {
    await createBook();
  } else {
    await updateBook()
  }

};

//Con esta funcion capturo los datos de los inputs y los guardo en el estado 
const handleChange = (e) => {
    console.log(e.target.value);
    setNewBook({
        ...newBook,
        [e.target.name] : e.target.value
    })

}; 

useEffect(()=>{
  if(params._id) {
    getBook()
  }
},[])

  return (
    <form  onSubmit={handleSubmit} className="bg-slate-700 flex flex-col gap-4 justify-center items-center w-fit p-5 rounded-md">
      <header className='flex justify-between gap-20'>
      <h1 className="font-bold text-2xl text-gray-200">
        {
          !params._id ? "Crea un libro!" : "Edita un libro"
        }
      </h1>
      <button onClick={handleDelete} type='button' className='bg-red-600 text-gray-200 text-sm px-1 rounded-md'>Eliminar</button>
      </header>

      <label
        htmlFor="book_name"
        className="flex flex-col justify-center items-center text-gray-200"
      >
        Nombre del Libro
        <input type="text" name='book_name' onChange={handleChange} value={newBook.book_name} className="border-0 rounded-md text-gray-950 text-center" />
      </label>

      <label
        htmlFor="autor"
        className="flex flex-col justify-center items-center text-gray-200"
      >
        Autor
        <input type="text" name='autor' onChange={handleChange} value={newBook.autor} className="border-0 rounded-md text-gray-950 text-center" />
      </label>

      <label
        htmlFor="release_year"
        className="flex flex-col justify-center items-center text-gray-200"
      >
        Año de Publicación
        <input type="number" name='release_year' onChange={handleChange} value={newBook.release_year} className="border-0 rounded-md text-gray-950 text-center" />
      </label>

      <label
        htmlFor="Genre"
        className="flex flex-col justify-center items-center text-gray-200"
      >
        Genero
        <input type="text" name='genre' onChange={handleChange} value={newBook.genre} className="border-0 rounded-md text-gray-950 text-center" />
      </label>

      <button type='submit' className='bg-gray-200 py-1 px-10 font-bold rounded-md border-0 hover:bg-slate-700 hover:text-gray-200 hover:border-2 hover: border-gray-200'>
        {
          !params._id ? "Crear" : "Actualizar"
        }
      </button>
    </form>
  );
};

export default Form;