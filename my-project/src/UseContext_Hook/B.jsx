import React, { useContext } from 'react';
import { Global } from './App';
import D from './D';

const B = () => {
    let { Obj } = useContext(Global)
    return (
        <>
            <div className='text-center'>
                <div className='my-10'>
                    <div className='text-4xl font-bold'> B </div>
                    {Obj.map((ele) => {
                        return (
                            <div>{ele.Name}{ele.Age}</div>
                        )
                    })}

                </div>
                <D></D>
            </div>
        </>
    )
}   

export default B


