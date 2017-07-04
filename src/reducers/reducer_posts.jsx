import {FETCH_POSTS} from '../actions'
import _ from 'lodash'

export default function posts(state = {} , action){
    switch(action.type){
        case FETCH_POSTS:
           return _.mapKeys(action.payload.data, post => post.id) ;
        default:
            return {};
    }
}