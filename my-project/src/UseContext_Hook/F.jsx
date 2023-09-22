import React, { useContext } from 'react'
import { Global } from './App'

const F = () => {

    let { Obj } = useContext(Global);
    return (
        <div>
            <div className='text-4xl font-bold'> F </div>
            <div>
                {Obj.map((el) => {
                    return (
                        <div>{el.Name}{el.Age}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default F
