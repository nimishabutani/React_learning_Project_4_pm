import React, { useContext } from 'react';
import { NameContext } from './Main';

const A = () => {
    let { info } = useContext(NameContext)
    return (
        <>
            <div className='text-center my-10'>
                <div className='text-4xl font-bold'> A </div>
                <div>
                    {info.map((ele) => {
                        return (
                            <div><b>Name : </b>{ele.Name} &nbsp;<b>Age : </b>{ele.Age} &nbsp;<b>Address : </b>{ele.Address}<br /></div>
                        )
                    })}


                </div>
            </div>
        </>
    )
}

export default A


