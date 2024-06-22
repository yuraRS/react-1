const SET_USER_AUTH = 'SET-USER-AUTH';
const SET_PROFILE_AUTH = 'SET-PROFILE-AUTH';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    profileAuth: null
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_PROFILE_AUTH:
            return {
                ...state,
                profileAuth: action.profileAuth
            }
        default:
            return state;
    };
};




export const setUserAuth = (userId, email, login) => ({type: SET_USER_AUTH, data: {userId, email, login}});

export const setProfileAuth = (profileAuth) => ({type: SET_PROFILE_AUTH, profileAuth});


export default authReducer;