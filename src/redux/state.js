let callbackRender = () => {

};

let state = {
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
};

export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likeCounter: 0,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    callbackRender(state);

};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    callbackRender(state);
}

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    callbackRender(state);

};

export const addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    callbackRender(state);
};


export const subscrite = (observer) => {
    callbackRender = observer;
};


export default state;




