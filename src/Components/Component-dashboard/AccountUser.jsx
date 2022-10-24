import React from 'react'
import { useSelector } from 'react-redux'

export default function AccountUser() {
    const user = useSelector(state => state.auth.user)

    return (
        <div>
            <p>Name : { user.name }</p>
            <p>Last-name : { user.lastname }</p>
            <p>Password : { user.password }</p>
            <p>Role : { user.role }</p>
        </div>
    )
}
