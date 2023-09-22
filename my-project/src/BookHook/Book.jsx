import React from 'react'
import { useState } from 'react';
import bookalias from './Bookdata.json'


const Book = () => {
    const [nbookdata, setbookdata] = useState(bookalias);
    const handleClick = () => {
        setbookdata([]);
    }
    const handleRemove = (bookId) => {
        setbookdata(nbookdata.filter(book => book.id !== bookId))

    }
    return (
        <div>
            <div className='w-auto  h-auto'>
                <table className='w-full table-fixed bg-gray-100 border border-collapse'>
                    <thead>
                        <tr className='text-left'>
                            <th>Id</th>
                            <th>Image</th>
                            <th>title</th>
                            <th>Author</th>
                            <th>Country</th>
                            <th>Pages</th>
                            <th>Year</th>
                            <th>Remove</th>

                        </tr>
                    </thead>

                    <tbody>
                        {

                            nbookdata.filter((Books) => { return (Books.country === 'Russia') || (Books.country === 'Germany') }).map((Books) => {
                                return (

                                    <tr className='border-2'>
                                        <td>{Books.id}</td>
                                        <td className='p-2'><img src={Books.image} className='h-32 '></img></td>
                                        <td>{Books.title}</td>
                                        <td> {Books.author}</td>
                                        <td> {Books.country}</td>
                                        <td>{Books.pages}</td>
                                        <td>{Books.year}</td>
                                        <td> <button onClick={() => handleRemove(Books.id)} className='h-10 w-auto bg-red-500 text-white font-bold  rounded-xl px-5 '>Remove</button>
                                        </td>
                                    </tr>


                                )
                            })
                        }
                        <tr>
                            <button onClick={handleClick} className='bg-blue-500 h-10 w-20 font-bold text-white rounded-xl my-2 '>Clear</button>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Book
