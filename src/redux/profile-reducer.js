const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    posts: [
        { id: 1, message: 'Hello world', likeCounter: 10 },
        { id: 2, message: 'My name is Yura', likeCounter: 2 },
    ],
    newPostText: 'world',
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCounter: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};


export const updataNewPostCriator = (text) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text}
);
export const addPostCriator = () => ({type: ADD_POST});

export default profileReducer;