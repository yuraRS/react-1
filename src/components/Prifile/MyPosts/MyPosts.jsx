import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';
import { addPostCriator, updataNewPostCriator } from '../../../redux/profile-reducer';



const MyPosts = (props) => {
  let postElement = props.posts.map(p => {
    return (
      <Post message={p.message} likeCounter={p.likeCounter} />
    )
  });



  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostCriator());
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.dispatch(updataNewPostCriator(text));
  };

 
  return (
    <div className={s.body}>
      <div className={s.postsTitle} >My posts</div>
      <div className={s.newPost}>
        <textarea className={s.area} ref={newPostElement} value={props.newPostText} onChange={onMessageChange} />
        <button type='button' className={s.button} onClick={addPost} >Send</button>
      </div>
      <div className={s.posts}>
        {postElement}
      </div>
    </div>
  );
};

export default MyPosts;

