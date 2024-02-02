import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.scss';


const DialogItem = (props) => {
    const path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink  to={path}>{props.name}</NavLink>
        </div>
    );
};


export default DialogItem;




