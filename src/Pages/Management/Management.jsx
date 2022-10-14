import React from 'react'

export default function Management() {
    return (
        <div>
        <div className='text-center'>
            <h1 className='text-7xl'>Welcomes Boss</h1>
            <p className='text-lg'>Good to see you budies</p>          
        </div>
        <br />
        <div>
        <h3 className='text-2xl text-center'>What's your new recipities ?</h3>
        </div>
        <div className='grid grid-cols-6 grid-rows-3 gap-4 grid-flow-col w-96 border-2 justify-center'>
        <main className='col-start-2 col-span-4 row-span-3'>
        <input type='text' placeholder='name' className='border-2 rounded-xl bg-black text-white text-center w-64'/>
        <input type='text' placeholder='url image' className='border-2 rounded-xl bg-black text-white text-center w-64'/>
        <textarea placeholder='Description' className='border-2 rounded-xl bg-black text-white text-center w-64'/>
        </main>
        </div>
        </div>
    )
}
