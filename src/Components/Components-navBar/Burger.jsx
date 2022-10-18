import React from 'react'

export default function Burger(props) {
    const {setOpen, open} = props
    const handleBurger = (e) => {
        e.preventDefault();
        setOpen(!open);
    };

    return (
    <div
        onClick={handleBurger}
        className="flex flex-col items-center justify-center relative cursor-pointer h-8"
        >
        <div
            className={`w-10 h-1 bg-gray-400 rounded-md shadow-md transform duration-200 ease-in-out -translate-y-2 ${
            open && 'rotate-45 translate-y-full'
            }`}
        ></div>
        <div
            className={`w-10 h-1 bg-orange-500 rounded-md shadow-md transform duration-75 ease-in-out ${
            open && '-translate-x-14 opacity-0 shadow-none'
            }`}
        ></div>
        <div
            className={`w-10 h-1 bg-gray-400 rounded-md shadow-md transform duration-200 ease-in-out translate-y-2 ${
            open && '-rotate-45 -translate-y-full'
            }`}
        ></div>
    </div>
    );
};
