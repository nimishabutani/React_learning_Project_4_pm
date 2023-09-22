import React from 'react'

const Book = (props) => {
    const { image, title, Author, price } = props;
    return (
        <div className=' inline-grid'>
        <div className=' container w-full h-auto '>
            <div className='shadow-2xl w-96 h-auto ms-20 mt-10 pb-10 rounded-2xl '>

                <img src={image} alt='' className='h-80  w-full rounded-lg' />
                <h1 className='h-10 font-bold text-2xl text-gray-600 text-center'>  {title}</h1>
                <h1 className='h-10 font-bold text-xl  text-gray-600 text-center'> {Author}</h1>
                <h1 className='h-10 font-bold  text-gray-600 text-center'>Rs. {price}</h1>
                <button className=' h-10 w-32 bg-gray-400 font-bold rounded-lg px-5 ms-32'>Add to cart</button>
            </div>
        </div>
        </div>

    )
}

export default Book
