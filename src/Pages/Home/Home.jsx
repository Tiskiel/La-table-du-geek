import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import logo from '../../Assets/images/logo-ALTG2.png'

export default function Home() { 

    return (
        <div className='flex-col h-screen pt-20 bg-gray-400'>
            <div className='flex justify-center'>
                <img src={logo} alt='' />
            </div>
            <div className='text-center font-Honey'>
                <h1 className='text-6xl text-rose-800'>[Description]</h1>
            </div>           
        </div>
    )
}

// const PageSearch = () => {
//     const [params, setParams] = useSearchParams()
//     const posts = useSelector()

//     useEffect(() => {
//         const search = params.get("search")
//         // Faire ma recherche via search
//     }, [params])
// }

// const SearchBar = () => {

// }
