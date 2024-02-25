import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';



const MyPosts = (props) => {
  let postElement = props.posts.map(p => {
    return (
      <Post message={p.message} likeCounter={p.likeCounter} />
    )
  });



  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({type: 'ADD-POST'});
  };

  let onMessageChange = () => {
    let text = newPostElement.current.value;
    let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    props.dispatch(action);
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

