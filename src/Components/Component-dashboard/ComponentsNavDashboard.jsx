import React from 'react'
import { useSelector } from 'react-redux'


export default function ComponentsNavDashboard() {
    const user = useSelector(state => state.auth.user)

    return (
        <div className='flex flex-row gap-4'>
            <div className='border p-2 rounded hover:text-white hover:bg-black'>Mon compte</div>
            <div className='border p-2 rounded hover:text-white hover:bg-black'>Mes postes</div>
            <div className='border p-2 rounded hover:text-white hover:bg-black'>Mes postes</div>
            <div className='border p-2 rounded hover:text-white hover:bg-black'>Mes postes</div>
            <div className='border p-2 rounded hover:text-white hover:bg-black'>Mes postes</div>
            <div className='border p-2 rounded hover:text-white hover:bg-black'>Mes postes</div>
            {user.role === "admin" && <div className='border p-2 rounded hover:text-white hover:bg-black'>Admin tools</div>}
        </div>
    )
}
