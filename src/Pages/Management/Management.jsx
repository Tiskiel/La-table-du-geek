import React from 'react'
import { useSelector } from 'react-redux'

export default function Management() {
    const categories = useSelector(state => state.allCategories.allCategories)

    const selectCategories = categories.map((element) => 
    <select key={element.name} defaultValue={element.name}>
        {element.sousCategories.map(el => <option key={el} value={el}>{el}</option>)}
    </select>)

    return (
        <div>
            <div className='text-center'>
                <h1 className='text-7xl'>Welcomes Boss</h1>
                <p className='text-lg'>Good to see you budies</p>          
            </div>
            <br />
            <div>
                <h3 className='text-2xl text-center'>What's your new recipities ?</h3>
            </div>
            <div className='grid grid-cols-3 gap-4 mt-28'>
            <div className=''>
                <main className='col-start-2 col-span-4 row-span-3'>
                <input type='text' placeholder='name' className='border-2 rounded-xl bg-black text-white text-center w-64'/>
                <input type='text' placeholder='url image' className='border-2 rounded-xl bg-black text-white text-center w-64'/>
                <textarea placeholder='Description' className='border-2 rounded-xl bg-black text-white text-center w-64'/>
                {selectCategories}
                <button className='border-2 bg-black text-cyan-300 rounded-lg p-2 box-decoration-slice w-64 '>Post</button>
                </main>
            </div>
            <div className=''>
                <main className='col-start-2 col-span-4 row-span-3'>
                <input type='text' placeholder='name' className='border-2 rounded-xl bg-black text-white text-center w-64'/>
                <input type='text' placeholder='url image' className='border-2 rounded-xl bg-black text-white text-center w-64'/>
                <textarea placeholder='Description' className='border-2 rounded-xl bg-black text-white text-center w-64'/>
                {selectCategories}
                <button className='border-2 bg-black text-cyan-300 rounded-lg p-2 box-decoration-slice w-64 '>Update</button>
                </main>
            </div>
            <div className=''>
                <main className='col-start-2 col-span-4 row-span-3'>
                <input type='text' placeholder='name' className='border-2 rounded-xl bg-black text-white text-center w-64'/>
                <button className='border-2 bg-black text-cyan-300 rounded-lg p-2 box-decoration-slice w-64 '>Delete</button>
                </main>
            </div>
            </div>
        </div>
    )
}
