import React from 'react'
import logo from '../../Assets/images/logo-ALTG.png'

export default function Home() {
    return (
        <div className='flex-col h-screen pt-20 bg-gray-400'>
            <div className='flex justify-center'>
                <img src={logo} alt='' />
            </div>
            <div className='text-center font-Honey'>
                <h1 className='text-6xl text-rose-800'>[Bienvenue à La table du geek]</h1>
            </div>           
        </div>
    )
}
