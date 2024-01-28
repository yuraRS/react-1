import s from './MyPosts.module.scss';
import Post from './Post/Post';


const MyPosts = () => {

  let postData = [
    {id: 1, message: 'Hello world', likeCounter: 10},
    {id: 2, message: 'My name is Yura', likeCounter: 2},
  ]

  return (
    <div className={s.body}>
      <div className={s.postsTitle}>My posts</div>
      <div className={s.newPost}>
        <form action="#" method='POST' className={s.form}>
          <input type="text" className={s.input} placeholder='your news...' />
          <button type='submit' className={s.button}>Send</button>
        </form>
      </div>
      <div className={s.posts}>
        <Post message={postData[0].message} likeCounter={postData[0].likeCounter} />
        <Post message={postData[1].message} likeCounter={postData[1].likeCounter} />
      </div>
    </div>
  );
};

export default MyPosts;