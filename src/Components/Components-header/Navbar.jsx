import React, { useState } from 'react'
import Burger from '../Components-navBar/Burger';
import Categories from '../Components-navBar/Categories';
import logo from '../../Assets/images/favicon.png'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const[open, setOpen] = useState(false);

    return (
        <div className='flex w-screen'>
            <div className='flex flex-1 gap-4'>
                <div className='flex'>
                    <Link to='/home'>
                        <img className='h-12' src={logo} alt="" />
                    </Link>
                </div>
                <div className='flex'>
                    <div className="flex-1 mt-2">
                        <Burger open={open} setOpen={setOpen} />
                    </div>
                    {open && 
                    <div className=" absolute mt-14 items-center justify-center bg-rose-800 gap-2 text-xl text-white rounded-br-2xl rounded-bl-2xl w-48 duration-700">
                        <Categories />
                    </div>
                    }
                </div>
            </div>
            <div className='flex flex-1 justify-center'>
                <div className='flex justify-center items-center'>
                    <input placeholder='Recherche' className="rounded" type="text" />
                </div>
                <div className='flex pl-2 py-3'>
                    <button className='border bg-black text-white rounded'>Valider</button>
                </div>
            </div>
            <div className='flex-1'>
                <div className='mt-3 text-right pr-4'>
                    <button className='border bg-black text-white rounded'>Connection</button>                
                </div>
            </div>
        </div>
    )
}
