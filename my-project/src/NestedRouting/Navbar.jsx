import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {


    return (
        <>
            <div className='container'>

                <nav className="h-20 w-full shadow-lg border  bg-[#f0f2ee] px-16 flex z-50">
                    <div className='logo h-20 w-1/4 text-2xl font-bold flex items-center'>
                        Logo
                    </div>
                    <div class="max-w-screen-xl flex flex-wrap items-center w-full  ps-14">
                        <div className="items-center justify-between hidden  w-full md:flex md:w-auto md:order-1" id="navbar-search">
                            <div className="relative mt-3 md:hidden">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                            </div>
                            <ul className=" w-full flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100  md:flex-row md:space-x-8 md:mt-0 md:border-0 text-md text-zinc-600">
                                <li>
                                    <Link to='/' className="block py-2 pl-3 pr-4  text-gray-700  hover:text-red-600 bg-transparent md:p-0" aria-current="page">Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to='AboutUs' className="block py-2 pl-3 pr-4 text-gray-700 hover:text-red-600 bg-transparent md:p-0">About us</Link>
                                </li>
                                <li>
                                    <Link to='Product' className="block py-2 pl-3 pr-4  text-gray-700 hover:text-red-600 bg-transparent md:p-0">Product</Link>
                                </li>

                            </ul>
                        </div>

                    </div>



                </nav>
            </div>
        </>

    )
    }


export default Navbar
