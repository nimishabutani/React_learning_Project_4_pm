import React, { useContext } from 'react';
import { Global } from './App';
import E from './E';

const C = () => {
    let { Obj } = useContext(Global)
    return (
        <>
            <div className='text-center'>
                <div className='my-10'>
                    <div className='text-4xl font-bold'> C </div>
                    {Obj.map((ele) => {
                        return (
                            <div>{ele.Name}{ele.Age}</div>
                        )
                    })}


                </div>
                <E></E>
            </div>
        </>
    )
}

export default C


