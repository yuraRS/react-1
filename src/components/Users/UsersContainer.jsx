import { connect } from 'react-redux';
import Users from './Users';
import { followAC, serUsersAC, unfollowAC } from '../../redux/users-reducer';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },

        unfollow: (userId) => {
            let action = unfollowAC(userId);
            dispatch(action);
        },

        setUsers: (users) => {
            dispatch(serUsersAC(users));
        },
    };
};


const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;