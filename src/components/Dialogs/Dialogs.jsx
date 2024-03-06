import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCriator, updataNewMessageBodyCriator } from '../../redux/dialogs-reducer';



const Dialogs = (props) => { 
    let state = props.store.getState().dialogsPage;

    let dialogsElement = state.dialods.map( d => <DialogItem name={d.name} id={d.id} icon={d.url} />); 
    let messageElement = state.messages.map((m) => <Message message={m. message} />);



    let onNewMessageChenge = (e) => {
        let text = e.target.value;
        props.store.dispatch(updataNewMessageBodyCriator(text));
    };

    let sendMessage = () => {
        props.store.dispatch(sendMessageCriator());
    };



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <div className={s.newMessage}>
                    <textarea className={s.area} value={state.newMessageBody} onChange={onNewMessageChenge} />
                    <button type='button' className={s.button} onClick={sendMessage} >Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;




