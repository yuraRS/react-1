import React from 'react';
import { sendMessageCriator, updataNewMessageBodyCriator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';




let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        onNewMessageChenge: (text) => {
            dispatch(updataNewMessageBodyCriator(text));
        },

        sendMessage: () => {
            dispatch(sendMessageCriator());
        },
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);


export default DialogsContainer;




