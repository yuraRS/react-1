import React from 'react';
import MyPosts from './MyPosts';
import { addPostCriator, updataNewPostCriator } from '../../../redux/profile-reducer';



const MyPostsContainer = (props) => {
    let state = props.store.getState().profilePage;


  let addPost = () => {
    props.store.dispatch(addPostCriator());
  };

  let onMessageChange = (text) => {
    props.store.dispatch(updataNewPostCriator(text));
  };

 
  return (
     <MyPosts addPost={addPost} updateNewPostText={onMessageChange} posts={state.posts} newPostText={state.newPostText} />
  );
};

export default MyPostsContainer;

