import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => { 


    let dialogsElement = props.dialogsPage.dialods.map( d => <DialogItem name={d.name} id={d.id} icon={d.url} />); 
    let messageElement = props.dialogsPage.messages.map((m) => <Message message={m. message} />);


    let newMessageText = React.createRef();

    let onMessageChange = () => {

        let text = newMessageText.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});
    };
    

    let addMessage = () => {
        let action = {type: 'ADD-MESSAGE'};
        props.dispatch(action);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <div className={s.newMessage}>
                    <textarea className={s.area} value={props.dialogsPage.newMessageText} onChange={onMessageChange} ref={newMessageText} />
                    <button type='button' className={s.button} onClick={addMessage} >Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;




