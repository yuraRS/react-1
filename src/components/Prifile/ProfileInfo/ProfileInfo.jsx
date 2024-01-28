import s from './ProfileInfo.module.scss';


const ProfileInfo = () => {
  return (
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
  );
};

export default ProfileInfo;