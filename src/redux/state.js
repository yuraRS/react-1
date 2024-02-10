import { renderEtireTree } from "../render";


let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello world', likeCounter: 10},
            {id: 2, message: 'My name is Yura', likeCounter: 2},
        ],
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
    },

    navbarPage: {
        friends: [
            { id: 1, name: 'Yura', url: 'https://mighty.tools/mockmind-api/content/human/72.jpg' },
            { id: 2, name: 'Ira', url: 'https://mighty.tools/mockmind-api/content/human/78.jpg' },
            { id: 3, name: 'Ola', url: 'https://mighty.tools/mockmind-api/content/human/55.jpg' },
        ],
    },
};


export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: postMessage,
        likeCounter: 0,
    };

    state.profilePage.posts.push(newPost);
    renderEtireTree(state);
};

export let addMessage = (messageInfo) => {
    let newMessage = {
        id: 4,
        message:  messageInfo,
    };

    state.dialogsPage.messages.push(newMessage);
    renderEtireTree(state);
};





export default state;