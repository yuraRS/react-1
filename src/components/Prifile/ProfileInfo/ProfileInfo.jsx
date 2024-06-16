import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.scss';
import userPhoto from '../../../assets/images/user.jpg';

const ProfileInfo = (props) => {

  if(!props.profile) {
    return <Preloader />
  }

  return (
    <div className={s.body}>
      <a href="#" className={s.avatar}>
        <img src={props.profile.photos.small == null ? userPhoto : props.profile.photos.small} alt="avatar" />
      </a>
      <div className={s.info}>
        <a href="#" className={s.name}>{props.profile.fullName}</a>
        <div className={s.aboutMe}></div>
        <div className={s.lookingForAJobDescription}></div>
        <a href='#' className={s.lookingForAJobDescription}></a>
        <a href='#' className={s.lookingForAJobDescription}></a>
      </div>
    </div>
  );
};

export default ProfileInfo;