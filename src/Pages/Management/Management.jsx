import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost, deletePost } from '../../Store/Action/action-posts'
import { id, newPost } from '../../Utilities/managementUtilities'



export default function Management() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [url, setUrl] = useState('')
    const [sousCat, setSousCat] = useState([])
    const [cat, setCategories] = useState([])
    const [killPostId, setkillPostId] = useState('')
    const [updatePostId, setUpdatePostId] = useState('')
    
    const dispatch = useDispatch()

    const categories = useSelector(state => state.allCategories.allCategories)
    const posts = useSelector(state => state.allPosts.posts )

    const handleCategories = (categories, sousCategories) => {
        setSousCat(currentValues => [...currentValues, sousCategories])
        setCategories(currentValue => [...currentValue, categories])
    }
    
    const selectCategories = categories.map((element) => 
        <select key={element.name} multiple={true} value={sousCat} onChange={sousCat => handleCategories(element.id, sousCat.target.value)} className='bg-gray-400 text-white border-2'>
            {element.sousCategories.map(el => <option key={el} value={el}>{el}</option>)}
        </select>
    )

    const showPosts = posts.map((post) => 
        <div className=''>
            <main className='col-start-2 col-span-4 row-span-3'>
            <input 
            type='text' placeholder={post.name} value={name} onChange={el => setName(el.target.value)}
            className='border-2 rounded-xl bg-black text-white text-center w-64'/>
            <input 
            type='text' placeholder='url image' value={url} onChange={url => setUrl(url.target.value)}
            className='border-2 rounded-xl bg-black text-white text-center w-64'/>
            <textarea 
            placeholder='Description' value={description} onChange={description => setDescription(description.target.value)}
            className='border-2 rounded-xl bg-black text-white text-center w-64'/>
            {selectCategories}
            <button 
            className='border-2 bg-black text-cyan-300 rounded-lg p-2 box-decoration-slice w-64 '
            onClick={() => dispatch(addPost(newPost(name, id(),description, url, cat, sousCat, 1, 1)))}>Add</button>
            </main>
        </div>
    )

    return (
        <div className='h-screen pt-20'>
            <div className='text-center'>
                <h1 className='text-7xl '>Welcomes Boss</h1>
                <p className='text-lg'>Good to see you budies</p>          
            </div>
            <br />
            <div>
                <h3 className='text-2xl text-center'>What's your new recipes ?</h3>
            </div>
            <div className='grid grid-cols-3 gap-4 mt-28'>
            <div className=''>
                <main className='col-start-2 col-span-4 row-span-3'>
                <input 
                type='text' placeholder='name' value={name} onChange={el => setName(el.target.value)}
                className='border-2 rounded-xl bg-black text-white text-center w-64'/>
                <input 
                type='text' placeholder='url image' value={url} onChange={url => setUrl(url.target.value)}
                className='border-2 rounded-xl bg-black text-white text-center w-64'/>
                <textarea 
                placeholder='Description' value={description} onChange={description => setDescription(description.target.value)}
                className='border-2 rounded-xl bg-black text-white text-center w-64'/>
                {selectCategories}
                <button 
                className='border-2 bg-black text-cyan-300 rounded-lg p-2 box-decoration-slice w-64 '
                onClick={() => dispatch(addPost(newPost(name, id(),description, url, cat, sousCat, 1, 1)))}>Add</button>
                </main>
            </div>
            <div className=''>
                <main className='col-start-2 col-span-4 row-span-3'>
                <input type='text' placeholder='ID post' 
                className='border-2 rounded-xl bg-black text-white text-center w-64'/>
                <button className='border-2 bg-black text-cyan-300 rounded-lg p-2 box-decoration-slice w-64 '>Update</button>
                </main>
            </div>
            <div className=''>
                <main className='col-start-2 col-span-4 row-span-3'>
                <input type='text' placeholder='ID post' value={killPostId} onChange={name => setkillPostId(name.target.value)}
                className='border-2 rounded-xl bg-black text-white text-center w-64'/>
                <button onClick={() => dispatch(deletePost(killPostId))}
                className='border-2 bg-black text-cyan-300 rounded-lg p-2 box-decoration-slice w-64 '>Delete</button>
                </main>
            </div>
            </div>
        </div>
    )
}
