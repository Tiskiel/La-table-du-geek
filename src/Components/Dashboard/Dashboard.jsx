import React from 'react'
import { useSelector } from 'react-redux'
import NavbarDashboard from '../Component-dashboard/NavbarDashboard'

export default function Dashboard() {
    const user = useSelector(state => state.auth.user)
    return (
        <div className='w-screen flex flex-col pl-2'>
            <div><NavbarDashboard /></div>
            <div>Welcome to your dashboard {user.name}</div>
        </div>
    )
}
