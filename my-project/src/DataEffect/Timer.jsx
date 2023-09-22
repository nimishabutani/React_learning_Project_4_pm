import React from 'react'
import { useEffect,useState } from 'react'


const Timer = () => {
  
    const[count,setCount]=useState(1);
    useEffect(()=>{
      
        setTimeout(()=>{
          
            setCount(count+1);
           

        },1000)
    })
  return (
    <div>
      I Have Rendered {count} Times!!!!
    </div>
  )
}

export default Timer
