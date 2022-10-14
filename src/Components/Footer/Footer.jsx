import React from 'react'
import LogoFB from '../../Assets/images/logo-fb.png'
import LogoIN from '../../Assets/images/logo-linkedin.png'
import LogoGH from '../../Assets/images/logo-github.png'

export default function Footer() {
    return (
        <div className='flex'>
            <div className='flex'></div>
            <div className='flex'></div>
            <div className='flex'>
                <img className='h-10' src={LogoFB} alt="" />
                <img className='h-10' src={LogoIN} alt="" />
                <img className='h-10' src={LogoGH} alt="" />
            </div>
        </div>
    )
}
