import React, { useState } from 'react'
import BurgerDashboard from './BurgerDashboard'
import ComponentsNavDashboard from './ComponentsNavDashboard'


export default function NavbarDashboard() {
    const [over, setOver] = useState(false)

    return (
        <div  onMouseLeave={() => setOver(false)}
            className='flex flex-row'>
            
                <BurgerDashboard over={over} setOver={setOver}/>
                <div className='ml-5 m-auto'>{over && <ComponentsNavDashboard />}</div>
            
        </div>
    )
}
