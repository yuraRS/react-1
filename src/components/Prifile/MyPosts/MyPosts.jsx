import s from './MyPosts.module.scss';
import About from './Post/About';
import Post from './Post/Post';


const MyPosts = () => {
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
        <Post message='Hello world' likeCounter='32' />
        <Post message='My name is Yura' likeCounter='10' />
      </div>
      <About name='Yura' age='35' />
      <About name='Ola' age='23' />
    </div>
  );
};

export default MyPosts;