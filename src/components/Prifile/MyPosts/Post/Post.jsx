import s from './Post.module.scss';


const Post = () => {
  return (
    <div className={s.post}>
      <div className={s.body}>
        <div className={s.avatar}>
          <img src="https://mighty.tools/mockmind-api/content/human/57.jpg" alt="avatar" />
        </div>
        <div className={s.text}>It's our new progtam! Hey</div>
      </div>
      <button className={s.button}>like</button>
    </div>
  );
};

export default Post;