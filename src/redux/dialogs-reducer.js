const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
    dialods: [
        { id: 1, name: 'Yura', url: 'https://mighty.tools/mockmind-api/content/human/72.jpg' },
        { id: 2, name: 'Ira', url: 'https://mighty.tools/mockmind-api/content/human/78.jpg' },
        { id: 3, name: 'Ola', url: 'https://mighty.tools/mockmind-api/content/human/55.jpg' },
        { id: 4, name: 'Dasha', url: 'https://mighty.tools/mockmind-api/content/human/9.jpg' },
        { id: 5, name: 'Kata', url: 'https://mighty.tools/mockmind-api/content/human/26.jpg' },
        { id: 6, name: 'Valera', url: 'https://mighty.tools/mockmind-api/content/human/37.jpg' },
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is you' },
        { id: 3, message: 'Yo' },
    ],
    newMessageBody: '',
};


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.messages.push({id: 4, message: body});
            state.newMessageBody = '';
        default:
            return state; 
    }
};



export const updataNewMessageBodyCriator = (newText) => (
    {type: UPDATE_NEW_MESSAGE_TEXT, body: newText}
);
export const sendMessageCriator = () => ({type: SEND_MESSAGE});

export default dialogsReducer;