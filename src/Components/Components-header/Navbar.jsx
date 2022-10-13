import React, { useState } from 'react'
import Burger from '../Components-navBar/Burger';
import Categories from '../Components-navBar/Categories';

export default function Navbar() {
    const[open, setOpen] = useState(false);
    
    return (
        <div className='grid gap-2 grid-cols-3'>
        <div>
        <div className="flex justify-between p-4">
        <p className="text-xl font-bold text-white">Logo</p>
        <Burger open={open} setOpen={setOpen} />
        </div>
            {open && 
            <div className="absolute flex items-center justify-center flex-col bg-blue-600 gap-2 text-xl text-white rounded-br-2xl rounded-bl-2xl w-36 duration-700">
                <Categories />
            </div>
        }
        </div>
        <div>Coco</div>
        <div>Polo</div>
        </div>
        )
}
