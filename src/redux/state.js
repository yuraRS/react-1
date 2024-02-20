
let store = {

    _callbackRender () {
    },
    
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello world', likeCounter: 10},
                {id: 2, message: 'My name is Yura', likeCounter: 2},
            ],
            newPostText: 'world',
        },
    
        dialogsPage: {
            dialods: [
                {id: 1, name: 'Yura', url: 'https://mighty.tools/mockmind-api/content/human/72.jpg'},
                {id: 2, name: 'Ira', url: 'https://mighty.tools/mockmind-api/content/human/78.jpg'},
                {id: 3, name: 'Ola', url: 'https://mighty.tools/mockmind-api/content/human/55.jpg'},
                {id: 4, name: 'Dasha', url: 'https://mighty.tools/mockmind-api/content/human/9.jpg'},
                {id: 5, name: 'Kata', url: 'https://mighty.tools/mockmind-api/content/human/26.jpg'},
                {id: 6, name: 'Valera', url: 'https://mighty.tools/mockmind-api/content/human/37.jpg'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is you'},
                {id: 3, message: 'Yo'},
            ],
            newMessageText: 'hello',
        },
    
        navbarPage: {
            friends: [
                { id: 1, name: 'Yura', url: 'https://mighty.tools/mockmind-api/content/human/72.jpg' },
                { id: 2, name: 'Ira', url: 'https://mighty.tools/mockmind-api/content/human/78.jpg' },
                { id: 3, name: 'Ola', url: 'https://mighty.tools/mockmind-api/content/human/55.jpg' },
            ],
        },
    },
    
    addPost () {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likeCounter: 0,
        };
    
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callbackRender(this._state);
    
    },
    
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callbackRender(this._state);
    },
    
    updateNewMessageText (newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callbackRender(this._state);
    },
    
    addMessage () {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callbackRender(this._state);
    },
        
    subscrite (observer) {
        this._callbackRender = observer;
    },

    getState () {
        return this._state;
    }, 
};

export default store;




