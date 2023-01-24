//import { combineReducers } from 'redux'

const initialState = {
    posts: [],
    lastId: 0,
    loading: false
}

export const postsReducer = ( state = initialState, action) => {
    switch (action.type){
        case "ADD_POST":
            action.payload.id = state.lastId + 1;
            return {...state, posts: [...state.posts,action.payload], lastId: state.lastId + 1}
        case "REMOVE_POST":
            return {...state, posts: state.posts.filter( (item) => { return item.id !== action.payload.id})}
        default:
            return state;
    }
}