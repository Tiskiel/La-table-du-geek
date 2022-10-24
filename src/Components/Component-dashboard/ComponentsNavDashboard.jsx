import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export default function ComponentsNavDashboard() {
    const user = useSelector(state => state.auth.user)

    return (
        <div className='flex flex-row gap-4'>
            <Link to='/home/dashboard/user/account' className='border p-2 rounded hover:text-white hover:bg-black'>Mon compte</Link>
            <Link to='/home/dashboard/user/userPosts' className='border p-2 rounded hover:text-white hover:bg-black'>Mes posts</Link>
            <Link to='/home/dashboard/user/favorites' className='border p-2 rounded hover:text-white hover:bg-black'>Mes favoris</Link>
            <Link to='/home/dashboard/user/comments' className='border p-2 rounded hover:text-white hover:bg-black'>Mes commentaires</Link>
            {user.role === "admin" && <Link to='/home/dashboard/user/admin' className='border p-2 rounded hover:text-white hover:bg-black'>Admin tools</Link>}
        </div>
    )
}
