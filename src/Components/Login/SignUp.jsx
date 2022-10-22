import React from 'react'

export default function SignUp() {
    return (
        <div className='flex flex-col'>
            <h3>
                Create new account :
            </h3>
            <input type='text' placeholder='name' className='rounded w-52'/>
            <br />
            <input type='text' placeholder='last name' className='rounded w-52' />
            <br />
            <input type='text' placeholder='username' className='rounded w-52' />
            <br />
            <input type='password' placeholder='password' className='rounded w-52' />
            <br />
            <input type='password' placeholder='confirm password' className='rounded w-52' />
            <br />
            <input type='email' placeholder='email' className='rounded text-justify w-52' />
            <br />
            <button 
            className='bg-transparent hover:bg-gray-800 text-gray-800 font-semibold hover:text-white px-2 py-1 border border-gray-900 hover:border-transparent rounded w-52'
            >send</button>
        </div>
    )
}
