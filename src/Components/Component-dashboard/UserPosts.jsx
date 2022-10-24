import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function UserPosts() {

    const posts = useSelector(state => state.allPosts.posts)
    const user = useSelector(state => state.auth.user)
    
    const allPostsUser = posts.filter(element => element.userId === user.id).map(el => 
        <Link to={`/${user.id}/${el.name}/${el.id}`}>
            <div className="mt-24 ml-3 rounded-3xl overflow-hidden shadow-lg bg-gray-100 h-3/6 hover:shadow-amber-400">
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
        <div className='h-screen bg-gray-400 gap-2 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 2xl:grid-cols-6'>
            {allPostsUser}
        </div>
    )
}
