import React from 'react'
import { useSelector } from 'react-redux'

export default function UserDashboard() {
    const user = useSelector(state => state.auth.user)

    return (
        <div className='mt-24'>Welcome to your dashboard {user.username}</div>
    )
}
