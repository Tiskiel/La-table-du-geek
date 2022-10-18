import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { login } from '../../Store/Action/action-login'
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
        <div className='flex flex-col'>
            <div className='flex flex-col'>
                <h3>
                    Sign in?
                </h3>
                <input value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Login' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                <button onClick={() => dispatch(login({username: userName, password}))}>send</button>
            </div>
            <div>
                <button onClick={() => setShow(!show)}>Sign up?</button>
                {show && <SignUp /> }
            </div>
        </div>
    )
}
