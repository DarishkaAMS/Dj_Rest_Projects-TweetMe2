import React, {useEffect, useState} from 'react'

import {apiProfileDetail} from './lookup'

function ProfileBadge(props) {
    const {user} = props
    console.log(user)
    return user ? <div>
        <p> {user.first_name} {user.last_name} </p>
        </div> : null
}

export function ProfileBadgeComponent (props) {
    const {username} = props
    const [didLookup, setDidLookup] = useState(false)
    const [profile, setProfile] = useState(null)
    const handleBackendLookup = (response, status) => {
        if (status === 200) {
            setProfile(response)
        }
    }
    useEffect(() => {
        if (didLookup === false){
            apiProfileDetail(username, handleBackendLookup)
            setDidLookup(true)
        }
    }, [username, didLookup, setDidLookup])
    return didLookup === false ? "I am loading..." : profile ? <ProfileBadge user={profile} /> : null
    }
