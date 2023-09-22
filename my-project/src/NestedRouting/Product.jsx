import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
    return (
        <>
            <div>
                <h1 className=''>This is product page</h1>
                <div className='h-32 w-1/2 mx-auto mt-20 bg-gray-600 flex justify-center'><h1>Item1</h1></div>
                <div className='h-14 w-1/2 mx-auto  bg-gray-100 flex justify-center'>
                    <Link to='Features' className='bg-red-400 px-8'>Features</Link>
                    <Link to='Newproduct' className='bg-green-400 px-8'>Newproduct</Link>
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default Product
