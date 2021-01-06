import React from 'react'

export function ActionBtn(props){
    const {tweet, action} = props
    const className = props.className ? props.className : 'btn btn-primary btn-sm'
    return action.type === 'like' ? <button className={className}> {tweet.likes} Like Me </button> : null
}
export function Tweet(props) {
    const {tweet} = props
    const className = props.className ? props.className : 'col-10 mx-auto col-md-6'
    return <div className={className}>
        <p>{tweet.id} - {tweet.content}</p>
        <div className='btn btn-group'></div>
            <ActionBtn tweet={tweet} action={{type:'like'}}/>
            <ActionBtn tweet={tweet} action={{type:'unlike'}}/>
        </div>
}