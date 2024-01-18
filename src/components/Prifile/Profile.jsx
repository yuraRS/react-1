import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.scss';


const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.image}>
        <img src="https://media.istockphoto.com/id/1628580367/pl/zdj%C4%99cie/t%C5%82o-%C5%9Bwi%C4%85teczne.jpg?s=612x612&w=0&k=20&c=cCysQFkHa-4mQNWszo04OkCuQ_PhW8Uz76SYztS64Uw=" alt="image" />
      </div>
      <div className={s.body}>
        <a href="#" className={s.avatar}>
          <img src="https://mighty.tools/mockmind-api/content/human/54.jpg" alt="avatar" />
        </a>
        <div className={s.info}>
          <a href="#" className={s.name}>Yurii</a>
          <div className={s.date}>Date of birth: 2 january</div>
          <div className={s.city}>City: Lviv</div>
          <div className={s.education}>Education: LCA</div>
          <div className={s.site}>Web site: https://www.test.com</div>
        </div>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;