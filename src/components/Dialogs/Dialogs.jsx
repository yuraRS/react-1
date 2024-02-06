import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => { 
   

    let dialogsElement = props.state.dialods.map( d => <DialogItem name={d.name} id={d.id} icon={d.url} />); 
    let messageElement = props.state.messages.map((m) => <Message message={m. message} />);


    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <div className={s.newMessage}>
                    <textarea className={s.area} ref={newMessageElement} ></textarea>
                    <button type='button' className={s.button} onClick={addMessage} >Send</button>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;




