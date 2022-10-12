import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Categorie(props) {
    const categorie = useSelector(state => state.allCategories)
    const {showSousCategories, setShowSousCategories} = props
    console.log(categorie)
    const handleSousCategories = (e) => {
        e.preventDefault()
        setShowSousCategories(!showSousCategories)
    }

    
    const categories = categorie.map((el) => (
        <>
            <p className=''
            onClick={handleSousCategories}>
                {el.name}
            </p>
            {
                showSousCategories && (
                    el.sousCategories.map((element) => (
                        <Link to={`/${element}`} key={element}>{element}</Link>
                    )))
                
            }
        </>
        
    ))
    

    return (
        <div>
            {categories}
        </div>
    )
}
