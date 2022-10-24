import React from 'react'
import burgerClose from '../../Assets/images/hamburgerClose.png'
import burgerOpen from '../../Assets/images/hamburgerOpen.png'

export default function BurgerDashboard({over, setOver}) {


    return (
        <div>
            {over ? <img src={burgerOpen} alt='burgerOpen' className='h-32 pl-3'/> : 
                <img src={burgerClose} alt='burgerClose' className='h-24' onMouseEnter={() => setOver(true)}/>}
            
        </div>
    )
}
