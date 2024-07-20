import { authApi, profileApi } from "../api/api";

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




const setUserAuth = (userId, email, login) => ({type: SET_USER_AUTH, data: {userId, email, login}});

const setProfileAuth = (profileAuth) => ({type: SET_PROFILE_AUTH, profileAuth});




export const authMe = () => {
    return (dispatch) => {
        authApi.authMe()
        .then((data) => {
            if(data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setUserAuth(id, email, login));
            }
        })
    }
};

export const getProfile = (userId) => {
    return (dispatch) => {
        profileApi.getProfileId(userId)
        .then((data) => {
            this.props.setProfileAuth(data)
        })
    }
}


export default authReducer;