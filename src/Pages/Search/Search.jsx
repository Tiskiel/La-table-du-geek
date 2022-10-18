import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom'

export default function Search() {

    const [params, setParams] = useSearchParams()
    const posts = useSelector(state => state.allPosts.posts )

    const search = params.get("search")

    const postFindJSX = posts.filter((el) => {

        if (el.name.includes(search)) return true

        if (el.Description.includes(search)) return true

        if (el.sousCategories.includes(search)) return true

        return false

    }).map((el) => (
            
        <Link to={`/${el.sousCategories[0]}/${el.name}/${el.id}`}>
            <div className="mt-20 ml-3 rounded-3xl overflow-hidden shadow-lg bg-gray-100 h-4/6 hover:shadow-amber-400">
                <img className="w-full h-56" src={el.imgDirect} alt="" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{el.name}</div>
                    <p className="text-gray-700 text-base">
                        {el.Description}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {el.sousCategories.map(tag =>
                        <span key={tag} 
                            className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                <Link to=''>{`#${tag}`}</Link>
                        </span>
                        )
                    }
                </div>
            </div>
        </Link>

    ))

    return (
        <div className='h-screen bg-gray-400 gap-2 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 2xl:grid-cols-6'>
        {postFindJSX}
    </div>
    )
}
