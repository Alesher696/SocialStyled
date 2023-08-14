import React from 'react';

let rerenderEntireTree = (state:any) =>{
    console.log()
}

export let state = {
profilePage:{
    posts: [
        {id: 1, data: "Hello its my first", like: 9},
        {id: 2, data: "Hello its my second", like: 15},
        {id: 3, data: "What's up guys?", like: 2},
    ],
    newPostText: 'Что у вас нового?'
}
}

export const addPost = ()=>{
    let newPost = {
        id:5,
        data: state.profilePage.newPostText,
        like: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export const subscribe = (observer:any)=>{
    rerenderEntireTree = observer
}