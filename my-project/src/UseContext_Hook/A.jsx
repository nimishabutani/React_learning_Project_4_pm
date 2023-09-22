import React, { useContext } from 'react';
import { Global } from './App';

const A = () => {
    let { Obj } = useContext(Global)
    return (
        <>
            <div className='text-center my-10'>
                <div className='text-4xl font-bold'> A </div>
                <div>
                    {Obj.map((ele) => {
                        return (
                            <div>{ele.Name}{ele.Age}</div>
                        )
                    })}


                </div>
            </div>
        </>
    )
}

export default A


