import React, { useState } from 'react'
import { useSelector } from 'react-redux'


export default function ComponentsNavDashboard() {
    const user = useSelector(state => state.auth.user)

    const [account, setAccount] = useState(false)
    const [userPosts, setUserPosts] = useState(false)
    const [favorites, setFavorite] = useState(false)
    const [comment, setComment] = useState(false)
    const [profil, setProfil] = useState(false)
    const [admin, setAdmin] = useState(false)

    return (
        <div className='flex flex-row gap-4'>
            <div className='border p-2 rounded hover:text-white hover:bg-black'>Mon compte</div>
            <div className='border p-2 rounded hover:text-white hover:bg-black'>Mes posts</div>
            <div className='border p-2 rounded hover:text-white hover:bg-black'>Mes favoris</div>
            <div className='border p-2 rounded hover:text-white hover:bg-black'>Mes commentaires</div>
            <div className='border p-2 rounded hover:text-white hover:bg-black'>Mon profil</div>
            {user.role === "admin" && <div className='border p-2 rounded hover:text-white hover:bg-black'>Admin tools</div>}
        </div>
    )
}
