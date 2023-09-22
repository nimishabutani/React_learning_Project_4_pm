import React, { useContext } from 'react';
import { Global } from './App';

const D = () => {
    let { Obj } = useContext(Global)
    return (
        <>
            <div >
                <div className='text-4xl font-bold'> D </div>
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

export default D


