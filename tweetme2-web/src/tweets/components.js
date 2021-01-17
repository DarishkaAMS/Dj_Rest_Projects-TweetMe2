import React, {useEffect, useState} from 'react'

import {ActionBtn} from './buttons'

import {
    apiTweetCreate,
    apiTweetList} from './lookup'

export function TweetsComponent(props){
    const textAreaRef = React.createRef()
    const [newTweets, setNewTweets] = useState([])

    const canTweet = props.canTweet === 'false' ? false : true
    const handleBackendUpdate = (response, status) => {
        // backend api response handler
        let tempNewTweets = [...newTweets]
        if (status === 201){
            tempNewTweets.unshift(response)
            setNewTweets(tempNewTweets)
        } else {
            console.log(response)
            alert('An error occurred, please try again')
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newVal = textAreaRef.current.value
        // backend api request
        apiTweetCreate(newVal, handleBackendUpdate)
        textAreaRef.current.value = ''
    }
    return <div className={props.className}>
        {canTweet === true && <div className='col-12 mb-3'>
             <form onSubmit={handleSubmit}>
                <textarea ref={textAreaRef} required={true} className='form-control' name='tweet'>
                </textarea>
                <button type='submit' className='btn btn-primary my-3'> Tweet </button>
            </form>
        </div>
        }
            <TweetsList newTweets={newTweets} {...props}/>
    </div>
}
