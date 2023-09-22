import { useState } from 'react'

const Form1 = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleInput = (e) => {
        const [name, value] = e.target
        setFormData({
            ...formData, [name]:value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className=' p-10  font-bold text-gray-500 text-xl  h-96 w-1/2 shadow-2xl '>
                <div className='flex w-full mt-5'>
                    <label className='w-32'>Name:</label>
                    <input type='text' value={formData.name} name="name" onChange={handleInput} className='h-8 w-full border border-gray-400' />
                </div>

                <div className='flex w-full mt-5'>
                    <label className='w-32'>Email:</label>
                    <input type='email' value={formData.email} name="email" onChange={handleInput} className='h-8 w-full border border-gray-400'/>
                </div>

                <div className='flex w-full mt-5'>
                    <label className='w-32'>Password:</label>
                    <input type='password' value={formData.password} name="password" onChange={handleInput} className='h-8 w-full border border-gray-400'/>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form1;
