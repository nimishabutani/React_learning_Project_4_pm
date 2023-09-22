import React from 'react'
import { useState, useMemo } from 'react'

const Taskmemo = () => {
    let [out, setOut] = useState(0);
    let [out1, setOut1] = useState(0);

    let [count, setCount] = useState();
    let [count1,setCount1] = useState();

    function output(e){
        setOut(e.target.value);
    }
    function output1(e){
        setOut1(e.target.value);
    }

    let f1 = () => {
        setCount(+out + +out1);
    }

    let f2 = () => {
        setCount1(out - out1);
    }

    let multicount = useMemo(()=>{
        console.log('------ Even ------');
    }, [count])

    let multicount1 = useMemo(()=>{
        console.log('------ Odd ------');
    }, [count1])

  return (
    <div className='p-10'>
      <input type='text' className='border border-black w-56 h-8' onChange={output} value={out} /> <br />
      <input type='text' className='border border-black mt-2 w-56 h-8' onChange={output1} value={out1} />
      <h1>{count}</h1>
      <h1>{count1}</h1>
      <h1>{multicount}</h1>
      <h1>{multicount1}</h1>
      <button className='border px-4 py-2 border-black me-2' onClick={f1}>Add</button>
      <button className='border px-4 py-2 border-black ml-2' onClick={f2}>sub</button>
    </div>
  )
}

export default Taskmemo
