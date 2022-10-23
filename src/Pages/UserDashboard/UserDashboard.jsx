import React from 'react'
import { useSelector } from 'react-redux'
import Dashboard from '../../Components/Dashboard/Dashboard'

export default function UserDashboard() {
    const user = useSelector(state => state.auth.user)

    return (
        <div className='h-screen pt-24 bg-gray-400'>
            <Dashboard />
        </div>
    )
}
