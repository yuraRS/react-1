

import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.scss';


const DialogItem = (props) => {
    const path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink  to={path}>{props.name}</NavLink>
        </div>
    );
};


const Message = (props) => {
    return  <div className={s.message}>{props.message}</div>
};

let dialods = [
    {id: 1, name: 'Yura'},
    {id: 2, name: 'Ira'},
    {id: 3, name: 'Ola'},
    {id: 4, name: 'Dasha'},
    {id: 5, name: 'Kata'},
    {id: 6, name: 'Valera'},
];

let dialogsElement = dialods.map( d => {
    return  <DialogItem name={d.name} id={d.id} />
}); 



let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is you'},
    {id: 3, message: 'Yo'},
];

let messageElement = messages.map((m) => <Message message={m. message} />);



const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    );
};

export default Dialogs;




