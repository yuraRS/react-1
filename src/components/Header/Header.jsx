import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';
import Preloader from '../common/Preloader/Preloader';
import authPhoto from '../../assets/images/user.jpg';

// let s = {
//     header: 'Header_header__I9HOx',
//     container: 'Header_container__DXsIF',
// };

const Header = (props) => {

    if(!props.profileAuth) {
        return (
            <header className={s.header}>
            <div className={s.container}>
            <a href="#" className={s.logo}>Friends</a>
            <div className={s.loginBlock}>
                {
                    props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>
                }
                <div className={s.userAuthAvatar}>
                    <img src={authPhoto} alt="" />
                </div>
            </div>
            </div>
        </header>
        )
    }

    return (
        <header className={s.header}>
            <div className={s.container}>
            <a href="#" className={s.logo}>Friends</a>
            <div className={s.loginBlock}>
                {
                    props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>
                }
                <div className={s.userAuthAvatar}>
                    <img src={props.profileAuth.photos.small != null ? props.profileAuth.photos.small : authPhoto} alt="" />
                </div>
            </div>
            </div>
        </header>
    );
};

export default Header;