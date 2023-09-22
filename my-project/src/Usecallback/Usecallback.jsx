import React, { useCallback } from 'react'
import { useState } from 'react'
import Button from './Button'
import Count from './Count'

const Usecallback = () => {

    const [square , setSquare] = useState(5)
    const [cube , setcube]  = useState(5)

    const calculateSquare = useCallback(() => {
      setSquare(square*square)
    },[square])

    const calculatecube= useCallback(() => {
      setcube(cube*cube*cube)
    },[cube])


  return (
    <div className=' bg-slate-500 text-lg h-96 w-96 mx-auto my-auto'>
        
        <Count text = "square" count = {square} /><br/>
        <Button handleClick = {calculateSquare} className=' h-10 w-20 bg-black text-white font-bold text-lg px-5 py-3'>square</Button><br/>
        <Count text = "cube" count = {cube} /><br/>
        <Button handleClick = {calculatecube}>cube</Button>
    </div>
  )
}

export default Usecallback