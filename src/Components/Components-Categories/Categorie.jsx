import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import arrowRight from '../../Assets/right-arrow.png'


export default function Categorie(props) {
    const categorie = useSelector(state => state.allCategories.allCategories)
    

    const [categorieSelected, setCategorieSelected] = useState(0)

    

    const handleSousCategories = (element) => {
        if(element === categorieSelected )return  setCategorieSelected(-1)
        setCategorieSelected(element)
        
    }
    
    
    
    const categories = categorie.map((el) => (
        <div key={el.id}>
            <p className='text-2xl'
            onClick={() => handleSousCategories(el.id) }>
                {el.name}
            </p>
            <span><img src={arrowRight} alt='arrowRight' /></span>
            <ul>
            {
                el.id === categorieSelected && el.sousCategories && (
                    el.sousCategories.map((element) => (
                        <li><Link to={`/${element}`} key={element}>{element}</Link></li>
                    )))
                
            }
            </ul>
        </div>
        
    ))
    

    return (
        <div>
            {categories}
        </div>
    )
}
