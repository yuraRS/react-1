import { NavLink } from 'react-router-dom';
import s from './Navbar.module.scss';
const Navebar = () => {


    return (
        <div className={s.navebar}>
        <div className={s.menu}>
          <nav className={s.body}>
            <ul className={s.list}>
              <li className={s.item}>
                <NavLink to='/profile' className={s.link}>Profile</NavLink>
              </li>
              <li className={s.item}>
                <NavLink to='/dialogs' className={s.link} >Message</NavLink>
              </li>
              <li className={s.item}>
                  <NavLink to='/news' className={s.link} >News</NavLink>
              </li>
              <li className={s.item}>
                  <NavLink to='/music' className={s.link} >Music</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <NavLink to='/settings' className={s.settings} >Settings</NavLink>
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