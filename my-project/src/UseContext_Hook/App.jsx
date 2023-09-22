import React, { useState, createContext } from 'react';
import A from './A';
import B from './B';
import C from './C';


export let Global = createContext();

const App = () => {
    let [Obj, setObj] = useState([{ Name: "Aryan", Age: 19 }, { Name: "Utsav", Age: 23 }]);
    return (
        <>
            <Global.Provider value={{ Obj: Obj }}>
                <div className='text-4xl font-bold text-center'>App</div>
                <div className='flex justify-around mx-64 mt-5'>
                    <A></A>
                    <B></B>
                    <C></C>
                </div>
            </Global.Provider>
        </>
    )
}

export default App
