import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sitebarReducer from "./sitebar-reducer";





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

        sitebarPage: {
            friends: [
                { id: 1, name: 'Yura', url: 'https://mighty.tools/mockmind-api/content/human/72.jpg' },
                { id: 2, name: 'Ira', url: 'https://mighty.tools/mockmind-api/content/human/78.jpg' },
                { id: 3, name: 'Ola', url: 'https://mighty.tools/mockmind-api/content/human/55.jpg' },
            ],
        },
    },


    subscribe (observer) {
        this._callSubscriber = observer;
    },
    getState () {
        return this._state;
    },


    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sitebarPage = sitebarReducer(this._state.sitebarPage, action);

        this._callSubscriber(this._state);
    },
};




export default store;




