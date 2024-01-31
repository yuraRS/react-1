import s from './MyPosts.module.scss';
import Post from './Post/Post';


let posts = [
  {id: 1, message: 'Hello world', likeCounter: 10},
  {id: 2, message: 'My name is Yura', likeCounter: 2},
];

let postElement = posts.map(p => {
  return (
    <Post message={p.message} likeCounter={p.likeCounter} />
  )
})




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
        {postElement}
      </div>
    </div>
  );
};

export default MyPosts;

