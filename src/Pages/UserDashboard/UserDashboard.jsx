import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from '../../Components/Dashboard/Dashboard'

export default function UserDashboard() {

    return (
        <div className='h-screen pt-24 bg-gray-400'>
            <Dashboard />
            <Outlet />          
        </div>
    )
}
