import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { login } from '../../Store/Action/action-login'
import somaPoke from '../../Assets/images/somaProfile.png'
import SignUp from './SignUp'

export default function Login() {
    const [show, setShow] = useState(false)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)

    useEffect(() => {
        if(user) navigate("/home/dashboard/user") 
    },[user])

    return (
        <div className='flex flex-col items-center '>
            <img src={somaPoke} alt='soma' className='w-52' />
            <div className='flex flex-col items-center'>
                <h3>
                    Sign in :
                </h3>
                <br />
                <input type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Login' className='w-52 rounded' />
                <br />
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='w-52 rounded' />
                <br />
                <button 
                className='bg-transparent hover:bg-gray-800 text-gray-800 font-semibold hover:text-white px-2 py-1 border border-gray-900 hover:border-transparent rounded w-52'
                onClick={() => dispatch(login({username: userName, password}))}>send</button>
            </div>
            <br />
            <div className='flex flex-col items-center'>
                <button onClick={() => setShow(!show)}>Sign up?</button>
                <br />
                {show && <SignUp /> }
            </div>
        </div>
    )
}
