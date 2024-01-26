

import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.scss';


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <NavLink to='/dialogs/1' className={s.dialog} >Yura</NavLink>
                <NavLink to='/dialogs/2' className={s.dialog} >Ira</NavLink>
                <NavLink to='/dialogs/3' className={s.dialog} >Ola</NavLink>
                <NavLink to='/dialogs/4' className={s.dialog} >Kata</NavLink>
                <NavLink to='/dialogs/5' className={s.dialog} >Saha</NavLink>
                <NavLink to='/dialogs/6' className={s.dialog} >Anna</NavLink>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is you</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    );
};

export default Dialogs;