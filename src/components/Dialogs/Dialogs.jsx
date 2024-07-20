import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Navigate } from 'react-router-dom';



const Dialogs = (props) => { 
    let state = props.state;

    let dialogsElement = state.dialods.map( d => <DialogItem name={d.name} id={d.id} icon={d.url} key={d.id} />); 
    let messageElement = state.messages.map((m) => <Message message={m. message} key={m.id} />);



    let onNewMessageChenge = (e) => {
        let text = e.target.value;
        props.onNewMessageChenge(text);
    };

    let sendMessage = () => {
        props.sendMessage();
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




