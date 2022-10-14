import React from 'react'
import Categorie from '../Components-Categories/Categorie'

export default function Categories(props) {
    const {showSousCategories, setShowSousCategories} = props
    return (
        <div>
        <Categorie showSousCategories={showSousCategories} setShowSousCategories={setShowSousCategories} />
        </div>
    )
}
