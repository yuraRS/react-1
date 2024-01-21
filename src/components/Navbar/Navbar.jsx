import s from './Navbar.module.scss';
const Navebar = () => {
    return (
        <div className={s.navebar}>
        <div className={s.menu}>
          <nav className={s.body}>
            <ul className={s.list}>
              <li className={s.item}><a href="" className={s.link}>Profile</a></li>
              <li className={s.item}><a href="" className={`${s.link} ${s.active}`}>Messages</a></li>
              <li className={s.item}><a href="" className={s.link}>Mews</a></li>
              <li className={s.item}><a href="" className={s.link}>Music</a></li>
            </ul>
          </nav>
        </div>
        <a href='#' className={s.settings}>Settings</a>
        <div className={s.title}>Friends</div>
        <div className={s.items}>
          <div className={s.friend}>
            <a href='#' className={s.avatar}>
              <img src="https://mighty.tools/mockmind-api/content/human/44.jpg" alt="avatar"/>
            </a>
            <a href="#" className={s.name}>Anna</a>
          </div>
          <div className={s.friend}>
            <a href='#' className={s.avatar}>
              <img src="https://mighty.tools/mockmind-api/content/human/55.jpg" alt="avatar"/>
            </a>
            <a href="#" className={s.name}>Ira</a>
          </div>
          <div className={s.friend}>
            <a href='#' className={s.avatar}>
              <img src="https://mighty.tools/mockmind-api/content/human/48.jpg" alt="avatar"/>
            </a>
            <a href="#" className={s.name}>Ola</a>
          </div>
        </div>
      </div>
    );
};

export default Navebar;