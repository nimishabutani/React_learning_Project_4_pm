import React, { useContext } from 'react';
import { Global } from './App';
import F from './F';

const E = () => {
    let { Obj } = useContext(Global)
    return (
        <>
            <div>
                <div className='my-10'>
                    <div className='text-4xl font-bold'> E </div>
                    {Obj.map((ele) => {
                        return (
                            <div>{ele.Name}{ele.Age}</div>
                        )
                    })}


                </div>
                <F></F>
            </div>
        </>
    )
}

export default E


