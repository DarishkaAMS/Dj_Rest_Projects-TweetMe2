import React, {useEffect, useState} from 'react'

export function ProfileBadge (props) {
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
            apiTweetDetail(tweetId, handleBackendLookup)
            setDidLookup(true)
        }
    }, [tweetId, didLookup, setDidLookup])

    return tweet === null ? null : <Tweet tweet={tweet} className={props.className}/>
}
    return null
}