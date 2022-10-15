import React from 'react'
import LogoFB from '../../Assets/images/logo-fb.png'
import LogoIN from '../../Assets/images/logo-linkedin.png'
import LogoGH from '../../Assets/images/logo-github.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='flex'>
            <div className='flex-1'>
                <img className='h-10 ' src={LogoFB} alt="logoFacebook" />
            </div>
            <div className='flex-1'>
                <a href='https://www.linkedin.com/in/jean-fran%C3%A7ois-wanty/' target='blank'><img className='h-8' src={LogoIN} alt="logoLinkedin" /></a>
            </div>
            <div className='flex-1'>  
                <a href='https://github.com/Tiskiel/La-table-du-geek' target='blank'><img className='h-8' src={LogoGH} alt="logoGithub" /></a>
            </div>
        </div>
    )
}
