import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function Recepes() {
    const {id} = useParams()

    const recipes = useSelector(state => state.allPosts.posts)

    const recipe = recipes.find(el => el.id === id)

    console.log(recipe);

    return (
        <div className='h-screen bg-gray-400'>
            <div className="flex-col m-2 mt-20 p-3 bg-[url('Assets/images/txt.png')] bg-cover">
                <div className='flex-col'>
                    <img className='rounded-full w-60 shadow-2xl mt-2' src={recipe.imgDirect} alt='' />
                </div>
                <div className="">
                    <div className='flex-col p-5 text-xl'>
                        <p className='text-center'>
                            <u>{recipe.name}</u>
                        </p>
                    </div>
                    <div className='flex-col mt-1'>
                        <p className='text-justify ml-32 mt-3'>
                            <b>Recette</b>
                            <br />
                            cuire les nouilles
                            <br />
                            cuire les boulettes
                            <br />
                            mélanger le tout 
                            <br />
                            cuire les nouilles
                            <br />
                            cuire les boulettes
                            <br />
                            mélanger le tout 
                            <br />
                            cuire les nouilles
                            <br />
                            cuire les boulettes
                            <br />
                            mélanger le tout 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
