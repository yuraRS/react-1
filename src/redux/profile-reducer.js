import { profileApi } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'Hello world', likeCounter: 10 },
        { id: 2, message: 'My name is Yura', likeCounter: 2 },
    ],
    newPostText: 'world',
    profile: null,
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCounter: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    };
};


export const updataNewPostCriator = (text) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text}
);
export const addPostCriator = () => ({type: ADD_POST});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});



export const getProfileId = (userId) => {
    return (dispatch) => {
        profileApi.getProfileId(userId)
        .then((data) => {
            dispatch(setUserProfile(data))
        })
    }
};







export default profileReducer;