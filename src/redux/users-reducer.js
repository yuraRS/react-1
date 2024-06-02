const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FECHING = 'TOGGLE-IS-FECHING';



let initialState = {
    users: [],
    totalUsersCount: 20,
    pageSize: 4,
    currentPage: 1,
    isFetching: false,
};


let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
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
        case UNFOLLOW:
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
        default:
            return state;
    }
};


export const follow = (userId) => (
    {type: FOLLOW, userId: userId}
);

export const unfollow = (userId) => (
    {type: UNFOLLOW, userId: userId}
);

export const setUsers = (users) => (
    {type: SET_USERS, users}
);

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount});

export const toggleIsFeching = (toggleIsFaching) => ({type: TOGGLE_IS_FECHING, isFetching: toggleIsFaching})





export default usersReducer;