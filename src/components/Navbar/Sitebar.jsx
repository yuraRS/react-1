import { NavLink } from 'react-router-dom';
import s from './Sitebar.module.scss';
import Friend from './Friend/Friend';


const Sitebar = (props) => {
  let ffiendElement = props.state.friends.map( f =>  <Friend name ={f.name} avatar={f.url} key={f.id} />);

  return (
    <div className={s.sitebar}>
      <div className={s.menu}>
        <nav className={s.body}>
          <ul className={s.list}>
            <li className={s.item}>
              <NavLink to='/profile' className={s.link} >Profile</NavLink>
            </li>
            <li className={s.item}>
              <NavLink to='/dialogs' className={s.link} >Messages</NavLink>
            </li>
            <li className={s.item}>
              <NavLink to='/news' className={s.link} >News</NavLink>
            </li>
            <li className={s.item}>
              <NavLink to='/users' className={s.link} >Users</NavLink>
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
          {ffiendElement}
        </div>
      </div>
    );
};

export default Sitebar;