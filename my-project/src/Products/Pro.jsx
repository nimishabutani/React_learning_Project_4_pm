import React from 'react'
import { useState } from 'react';


const Pro = (props) => {
    const { id, image, name, email, location, phone } = props;

    const [nProductData, setproductdata] = useState(props);


    const handleRemove = (productId) => {
        setproductdata(nProductData.filter(product => product.id !== productId))

    }

    // const [newName, setNewname] = useState(name);
    // const [nname, setName] = useState(props.name);

    // const eventhandler = () => {
    //     setName(newName);
    // }

    // const changehandler = (event) => {
    //     setNewname(event.target.value);
    // }
    return (
        <>
            <div className='w-full bg-gray-50 h-auto flex'>
                <h1 className='ps-24 pt-2 font-bold text-xl w-1/5'>Contacts</h1>
                <div className=' w-full h-12 pt-2 justify-end flex'>
                    <div className='w-40 h-10 bg-red-200'>
                        <input type='text' className='w-full h-10 bg-slate-600'></input></div>
                    <div><button className='bg-blue-500 px-2 h-8 text-white text-sm font-bold rounded-md'>Add Contacts</button></div>
                    <div className='h-8 w-8 bg-blue-500 ms-2 rounded-md'></div>
                    <div className='h-8 w-8 bg-blue-500 ms-2 rounded-md'>3</div>
                    <div className='w-auto'> <input type='search' className='h-8 w-32 ms-2 me-5 rounded-md placeholder:ps-2 outline-gray-500 focus:outline-gray-400' placeholder='Search'></input></div>
                </div>
            </div>
            <table className=' w-full table-fixed border border-collapse '>
                <thead className='bg-gray-200 h-12 border border-slate-400'>
                    <tr>
                        <th>id </th>
                        <th>Name </th>
                        <th>Email </th>
                        <th>Location </th>
                        <th>Phone </th>
                        <th>Actions</th>
                    </tr>

                </thead>
                <tbody>
                <tr className='text-center h-12 border border-slate-400 text-gray-500 text-sm font-semibold'>
                    <td className=''>{id}</td>
                    <td className='h-12 flex'>
                        <span className='ms-20 my-auto'>
                            <img src={image} alt='' className='rounded-full h-8 w-8'></img></span><span className='pt-3 ms-3'>{name}</span></td>
                    <td className=''>{email}</td>
                    <td className=''>{location}</td>
                    <td className=''>{phone}</td>
                    <td >
                        <div className='flex justify-center'>
                            <button className='border-2 border-blue-500 rounded-lg items-center h-6 w-auto px-2 text-blue-700 font-semibold' >Edit</button>
                            <button onClick={() => handleRemove(nProductData.id)} className='border-2 border-red-400 rounded-lg  my-auto h-6 w-auto  ms-5 px-2 text-red-500 font-semibold'>Delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>
            {proData.map((ele1) => {
                return (
                    // <div>
                    <Pro id={ele1.id} image={ele1.image} name={ele1.name} location={ele1.location} email={ele1.email} phone={ele1.phone} />
                    // </div>
                )
            })}
            </table>
        </>
    )
}

export default Pro
