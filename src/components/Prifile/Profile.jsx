import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.image}>
        <img src="https://media.istockphoto.com/id/1628580367/pl/zdj%C4%99cie/t%C5%82o-%C5%9Bwi%C4%85teczne.jpg?s=612x612&w=0&k=20&c=cCysQFkHa-4mQNWszo04OkCuQ_PhW8Uz76SYztS64Uw=" alt="image" />
      </div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;