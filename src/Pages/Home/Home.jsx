import React from 'react'
import logo from '../../Assets/images/logo-ALTG.png'

export default function Home() {
    return (
        <div className='grid grid-col-2 w-screen bg-gray-400 h-screen'>
        <div className='col-span-2 border'>
            <img className='justify-center' src={logo} alt='' />
        </div>
        <div>
            <h1>Bienvenu sur La table du geek</h1>
        </div>           
        </div>
    )
}
