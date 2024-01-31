import s from './Post.module.scss';


const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.body}>
        <div className={s.avatar}>
          <img src="https://mighty.tools/mockmind-api/content/human/57.jpg" alt="avatar" />
        </div>
        <div className={s.text}>{props.message}</div>
      </div>
      <button className={s.button}>like{props.likeCounter}</button>
    </div>
  );
};

export default Post;












