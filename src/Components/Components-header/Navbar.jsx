import React, { useState } from 'react'
import Burger from '../Components-navBar/Burger';
import Categories from '../Components-navBar/Categories';
import logo from '../../Assets/images/favicon.png'
import logoConnected from '../../Assets/images/logoConnectedBase.png'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar(props) {

    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const user = useSelector(state => state.auth.user)

    const handleConnection = () => {
        navigate("/home/connection")
    }


    const handleClick = () => {

        navigate("/search?search=" + search)
    }

    return (
        <div className='flex w-screen'>
            <div className='flex flex-1 gap-4'>
                <div className='flex pt-1'>
                    <Link to='/home'>
                        <img className='h-12' src={logo} alt="" />
                    </Link>
                </div>
                <div className='flex'>
                    <div className="flex-1 mt-2 pt-1">
                        <Burger open={open} setOpen={setOpen} />
                    </div>
                    {open && 
                    <div className=" absolute mt-16 pt-2 items-center justify-center  bg-rose-800 opacity-90 gap-2 text-xl text-white rounded-br-2xl rounded-bl-2xl w-48 duration-700">
                        <Categories />
                    </div>
                    }
                </div>
            </div>
            <div className='flex flex-1 justify-center'>
                <div className='flex justify-center items-center'>
                    <input value={search} onChange={e => setSearch(e.target.value)} placeholder='Recherche' className="rounded px-2 py-1" type="text" />
                </div>
                <div className='flex pl-2 py-3'>
                    <button onClick={handleClick} className='bg-transparent hover:bg-gray-400 text-gray-500 font-semibold hover:text-white px-2 py-1 border border-gray-500 hover:border-transparent rounded'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='flex-1'>
                <div className='mt-3 text-right pr-4'>
                        {user ? (<button onClick={handleConnection}
                        >
                        <img src={logoConnected} alt='' className='h-12 mb-1 mr-2 rounded-full shadow-md hover:shadow-yellow-300 ' /></button>) : (<button onClick={handleConnection}
                        className='bg-transparent hover:bg-gray-400 text-gray-500 font-semibold hover:text-white px-2 py-1 border border-gray-500 hover:border-transparent rounded'>
                        Connection</button>)}             
                </div>
            </div>
        </div>
    )
}
