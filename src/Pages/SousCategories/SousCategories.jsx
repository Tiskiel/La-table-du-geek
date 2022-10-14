import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

export default function SousCategories() {
    const {nameSousCategorie} = useParams()
    const posts = useSelector((state) => state.allPosts.posts)
    
    
    const post = posts.filter(element => element.sousCategories.includes(nameSousCategorie)).map(el => 
        <Link to={`/${nameSousCategorie}/${el.name}`}>
            <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-gray-100 h-3/6">
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
        )
        return (
            <div className='bg-gray-400 grid grid-cols-5 gap-4 h-screen'>
                {post}
            </div>
    )
}
