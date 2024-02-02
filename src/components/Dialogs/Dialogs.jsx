import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => { 
   

    let dialogsElement = props.dialog.map( d => <DialogItem name={d.name} id={d.id} />); 
    let messageElement = props.message.map((m) => <Message message={m. message} />);



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




