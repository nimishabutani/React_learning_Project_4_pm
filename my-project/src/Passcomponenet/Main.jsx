import {React,useState,createContext} from 'react'
import A from './A';
import B from './B';
import C from './C'

export const NameContext =createContext();



const Main = () => {
    let [info, setinfo] = useState([{ Name: "nimisha", Age: 25,Address:"Surat" }, { Name: "mital", Age: 20,Address:"bombay" }]);
    return (
        <div>
            <NameContext.Provider value={{info}}>
            
                <div className='text-4xl font-bold text-center'>Main</div>
           
                <div className='flex justify-around mx-64 mt-5'>
                    <A />
                    <B />
                    <C />
             </div>
            </NameContext.Provider>
            
        </div>
    )
}

export default Main
