import React, {useEffect, useState} from 'react'

import {UserDisplay, UserPicture} from './components'
import {apiProfileDetail} from './lookup'


function ProfileBadge(props) {
    const {user} = props
    console.log(user)
    const handleFollowToggle = (event) => {
        console.log(event)
    }
    return user ? <div>
        <UserPicture user={user} hidelink/>
        <p> <UserDisplay user={user} includeFullName hidelink/> </p>
        <button className='btn btn-primary' onClick={handleFollowToggle}> {user.is_following ? "Unfollow" : "Follow"} </button>
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
