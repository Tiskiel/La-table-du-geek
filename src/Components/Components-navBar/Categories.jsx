import React from 'react'
import Categorie from '../Components-Categories/Categorie'

export default function Categories(props) {
    const {showSousCategories, setShowSousCategories} = props
    return (
        <div className='pl-1 pb-1'>
        <Categorie showSousCategories={showSousCategories} setShowSousCategories={setShowSousCategories} />
        </div>
    )
}
