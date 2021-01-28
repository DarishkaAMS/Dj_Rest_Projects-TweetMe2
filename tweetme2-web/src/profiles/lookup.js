import {backendLookup} from '../lookup'

export function apiProfileDetail(tweetId, callback){
    backendLookup('GET', `/tweets/${tweetId}/`, callback)
}