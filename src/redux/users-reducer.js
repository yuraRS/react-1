import { followApi, usersApi } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FECHING = 'TOGGLE-IS-FECHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE-FOLLOWING-IN-PROGRESS';


let initialState = {
    users: [],
    totalUsersCount: 20,
    pageSize: 100,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};


let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //users: [...state.users],
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                //users: [...state.users],
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, 
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FECHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.id] : [...state.followingInProgress.filter(id => id != action.id)]
            }
        default:
            return state;
    }
};


export const followAccept = (userId) => (
    {type: FOLLOW, userId: userId}
);

export const unfollowAccept = (userId) => (
    {type: UNFOLLOW, userId: userId}
);

export const setUsers = (users) => (
    {type: SET_USERS, users}
);

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount});

export const toggleIsFeching = (toggleIsFaching) => ({type: TOGGLE_IS_FECHING, isFetching: toggleIsFaching})

export const toggleFollowingInProgress = (isFetching, id) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, id});




export const getUsers = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(toggleIsFeching(true));

        usersApi.getUsers(pageSize, currentPage)
            .then((data) => {
                dispatch(toggleIsFeching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    }
};

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId));
        followApi.followPost(userId)
        .then((data) => {
            dispatch(toggleFollowingInProgress(false, userId))
            dispatch(followAccept(userId));
        });
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId));
        followApi.followDelete(userId)
        .then((data) => {
            dispatch(toggleFollowingInProgress(false, userId))
            dispatch(unfollowAccept(userId));
        });
    }
}






export default usersReducer;