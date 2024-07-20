import React from 'react';
import { sendMessageCriator, updataNewMessageBodyCriator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthNavigate from '../../hoc/withAuthNavigate';




let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
        isAuth: state.auth.isAuth,
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


let AuthNAvigateComponent = withAuthNavigate(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthNAvigateComponent);


export default DialogsContainer;




