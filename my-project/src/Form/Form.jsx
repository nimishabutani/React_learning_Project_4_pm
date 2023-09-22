import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleName = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className=' p-10  font-bold text-gray-500 text-xl  h-96 w-1/2 shadow-2xl '>
                <div className='flex w-full mt-5'>
                    <label className='w-32'>Name: </label>
                    <input type='text' value={name} onChange={handleName} className='h-8 w-full border border-gray-400'></input>
                </div>

                <div className='flex w-full mt-5'>
                    <label className='w-32'>Email:</label>
                        <input type='email' value={email} onChange={handleEmail} className='h-8 w-full border border-gray-400'></input>
                   
                </div>

                <div className='flex w-full mt-5'>
                    <label className='w-32'>Password:</label>
                        <input type='password' value={password} onChange={handlePassword} className='h-8 w-full border border-gray-400'></input>
                    
                </div>
<div>

<button type='submit'>Submit</button>
</div>
            </form>
        </div>
    )
}

export default Form
