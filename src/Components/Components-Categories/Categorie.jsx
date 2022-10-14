import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import arrowRight from '../../Assets/right-arrow.png'


export default function Categorie(props) {
    const categorie = useSelector(state => state.allCategories.allCategories)
    

    const [categorieSelected, setCategorieSelected] = useState(0)

    const [open, setOpen] = useState(false)

    const handleArrow = (e) => {
        e.preventDefault();
        setOpen(!open);
    };

    const handleSousCategories = (element) => {
        if(element === categorieSelected )return  setCategorieSelected(-1)
        setCategorieSelected(element)
        
    }
    
    
    
    const categories = categorie.map((el) => (
        <div key={el.id}>
        <div className='flex hover:cursor-pointer' onClick={handleArrow} >
            <div><img src={arrowRight} alt='arrowRight' className={`flex  ${open && 'rotate-90'}`} /></div>
            <div className='text-2xl'
            onClick={() => {handleSousCategories(el.id)} }>
                {el.name}
            </div>
        </div>
            <ul>
            {
                el.id === categorieSelected && el.sousCategories && (
                    el.sousCategories.map((element) => (
                        <li><Link to={`/categories/${el.name}/${element}`} key={element}>{element}</Link></li>
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
