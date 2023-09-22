import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Header = () => {

    const result = useSelector((state) => state.cartData);
    console.warn("data in header", result);
    return (
        <div className="header">
            <div className="cart-div bg-slate-500 h-20">
                <Link to="/cart">
                    <div className='h-6 w-6 bg-red-600 rounded-full text-center mt-10  -mb-5 ms-28 z-10 relative'><span className='length'>{result.length}</span></div>
                    <div className=' mt-2 ms-20 absolute'>    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" style={{ height: 30 }} className='z-20 h-10 w-10' /></div>
                </Link>
            </div>

        </div>
    )
}

export default Header
