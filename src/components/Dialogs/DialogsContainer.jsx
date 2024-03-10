import React from 'react';
import { sendMessageCriator, updataNewMessageBodyCriator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';



const DialogsContainer = (props) => { 
    let state = props.store.getState().dialogsPage;


    let onNewMessageChenge = (text) => {
        props.store.dispatch(updataNewMessageBodyCriator(text));
    };

    let sendMessage = () => {
        props.store.dispatch(sendMessageCriator());
    };



    return (
        <Dialogs updateNewMessageText={onNewMessageChenge} sendMessage={sendMessage} state={state} />
    );
};

export default DialogsContainer;




