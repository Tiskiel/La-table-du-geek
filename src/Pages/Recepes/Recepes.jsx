import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function Recepes() {
    const {id} = useParams()

    const recipes = useSelector(state => state.allPosts.posts)

    const recipe = recipes.find(el => el.id === id)

    console.log(recipe);

    return (
        <div className='bg-gray-400 h-screen'>
            <img className='rounded-full h-40' src={recipe.imgDirect} alt='' />
            <p>
                Bienvenu sur la page de {recipe.name}
            </p>
        </div>
    )
}
