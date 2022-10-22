import React from 'react'
import logo from '../../Assets/images/logo-ALTG2.png'

export default function Home() { 

    return (
        <div className='flex-col h-screen pt-20 bg-gray-400'>
            <div className='flex justify-center'>
                <img src={logo} alt='' />
            </div>
            <div className='text-center font-Honey'>
                <h1 className='text-6xl text-rose-800'>[ Un site web qui lie l'amour de la bouffe et la passion des mangas au même endroit ! ]</h1>
            </div>           
        </div>
    )
}