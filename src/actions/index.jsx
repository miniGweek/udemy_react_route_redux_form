import axios from 'axios'
const API_URL = 'http://reduxblog.herokuapp.com/api/posts?key=minigweek'

export const FETCH_POSTS='FETCH_POSTS'

export default function fetchPosts(){
    const request = axios.get(API_URL);
    return{
        type:FETCH_POSTS,
        payload:request
    }
}