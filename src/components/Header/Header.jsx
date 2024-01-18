import s from './Header.module.scss';

// let s = {
//     header: 'Header_header__I9HOx',
//     container: 'Header_container__DXsIF',
// };

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
            <a href="#" className={s.logo}>Friends</a>
            </div>
        </header>
    );
};

export default Header;