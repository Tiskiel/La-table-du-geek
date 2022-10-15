import React, { useState } from 'react'
import Burger from '../Components-navBar/Burger';
import Categories from '../Components-navBar/Categories';
import logo from '../../Assets/images/favicon.png'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const[open, setOpen] = useState(false);

    return (
        <div className='flex w-screen'>
            <div className='flex-1'>
                <Link to='/home'>
                    <img className='h-12' src={logo} alt="" />
                </Link>
            </div>
            <div className='flex-1'>
                <div className="flex-1 p-4">
                    <Burger open={open} setOpen={setOpen} />
                </div>
                {open && 
                <div className="absolute text flex items-center justify-center flex-col bg-rose-800 gap-2 text-xl text-white rounded-br-2xl rounded-bl-2xl w-48 duration-700">
                    <Categories />
                </div>
                }
            </div>
            <div className='flex-1'>
                <input type="text" />
            </div>
            <div className='flex-1'>
                <button className='flex'>Rechercher</button>
            </div>
            <div className='flex-1'>
                Connection
            </div>
        </div>
    )
}
