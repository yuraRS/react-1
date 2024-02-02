import s from './MyPosts.module.scss';
import Post from './Post/Post';



const MyPosts = (props) => {

  let postElement = props.post.map(p => {
    return (
      <Post message={p.message} likeCounter={p.likeCounter} />
    )
  })


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

