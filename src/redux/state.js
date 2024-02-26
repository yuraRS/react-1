const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _callSubscriber () {
    },
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hello world', likeCounter: 10 },
                { id: 2, message: 'My name is Yura', likeCounter: 2 },
            ],
            newPostText: 'world',
        },

        dialogsPage: {
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
        },

        navbarPage: {
            friends: [
                { id: 1, name: 'Yura', url: 'https://mighty.tools/mockmind-api/content/human/72.jpg' },
                { id: 2, name: 'Ira', url: 'https://mighty.tools/mockmind-api/content/human/78.jpg' },
                { id: 3, name: 'Ola', url: 'https://mighty.tools/mockmind-api/content/human/55.jpg' },
            ],
        },
    },


    subscrite (observer) {
        this._callSubscriber = observer;
    },
    getState () {
        return this._state;
    },


    dispatch (action) {
        debugger
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likeCounter: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.messages.push({id: 4, message: body});
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber(this._state);
        }
    },
};


export const updataNewMessageBodyCriator = (newText) => (
    {type: UPDATE_NEW_MESSAGE_BODY, body: newText}
);


export const sendMessageCriator = () => ({type: SEND_MESSAGE});

export default store;




