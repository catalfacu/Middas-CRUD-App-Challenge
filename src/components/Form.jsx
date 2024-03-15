"use client"

import {useState} from 'react';
import { useRouter } from 'next/navigation';

function Form() {

//Creo este estado para capturar los datos del libro
let [newBook, setNewBook] = useState({
    book_name: "",
    autor: "",
    release_year: null,
    genre: ""
});
const router = useRouter();

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

    if(res.status === 200) {
        router.push("/");
    }
    } catch (error) {
        console.log(error)
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

//Con esta funcion realizo el posteo de un nuevo libro
const handleSubmit = async(e) => {
    e.preventDefault();
    await createBook();
};


  return (
    <form  onSubmit={handleSubmit} className="bg-slate-700 flex flex-col gap-4 justify-center items-center w-fit p-5 rounded-md">
      <h1 className="font-bold text-2xl text-gray-200">Crea un nuevo libro!</h1>
      <label
        htmlFor="book_name"
        className="flex flex-col justify-center items-center text-gray-200"
      >
        Nombre del Libro
        <input type="text" name='book_name' onChange={handleChange} className="border-0 rounded-md text-gray-950 text-center" />
      </label>

      <label
        htmlFor="autor"
        className="flex flex-col justify-center items-center text-gray-200"
      >
        Autor
        <input type="text" name='autor' onChange={handleChange} className="border-0 rounded-md text-gray-950 text-center" />
      </label>

      <label
        htmlFor="release_year"
        className="flex flex-col justify-center items-center text-gray-200"
      >
        Año de Publicación
        <input type="number" name='release_year' onChange={handleChange} className="border-0 rounded-md text-gray-950 text-center" />
      </label>

      <label
        htmlFor="Genre"
        className="flex flex-col justify-center items-center text-gray-200"
      >
        Genero
        <input type="text" name='genre' onChange={handleChange} className="border-0 rounded-md text-gray-950 text-center" />
      </label>

      <button className='bg-gray-200 py-1 px-10 font-bold rounded-md border-0 hover:bg-slate-700 hover:text-gray-200 hover:border-2 hover: border-gray-200'>
        Guardar
      </button>
    </form>
  );
};

export default Form;