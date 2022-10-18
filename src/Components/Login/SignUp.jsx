import React from 'react'

export default function SignUp() {
    return (
        <div className='flex flex-col'>
            <h3>
                Create new account
            </h3>
            <input type='text' placeholder='name' />
            <input type='text' placeholder='last name' />
            <input type='text' placeholder='username' />
            <input type='text' placeholder='password' />
            <input type='email' placeholder='email' />
            <button>send</button>
        </div>
    )
}
