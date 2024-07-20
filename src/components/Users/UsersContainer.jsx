import { connect } from 'react-redux';
import { follow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFeching, unfollow, toggleFollowingInProgress, getUsers } from '../../redux/users-reducer';
import axios from 'axios';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { usersApi } from '../../api/api';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        // this.props.toggleIsFeching(true);

        // usersApi.getUsers(this.props.pageSize, this.props.currentPage)
        //     .then((data) => {
        //         this.props.toggleIsFeching(false);
        //         this.props.setUsers(data.items);
        //         this.props.setTotalUsersCount(data.totalCount);
        //     });
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    onPagesChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFeching(true);

        // usersApi.getUsers(this.props.pageSize, pageNumber)
        // .then((data) => {
        //     this.props.toggleIsFeching(false);
        //     this.props.setUsers(data.items);
        // });
        this.props.getUsers(this.props.pageSize, pageNumber)
    }


    render() {    
        return (
            <>
                {
                    this.props.isFetching ?  <Preloader /> : null
                }
                <Users  onPagesChanged={this.onPagesChanged}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       users={this.props.users}
                       followingInProgress={this.props.followingInProgress}
                       toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                 />
            </>
        )
    }


};



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        

    };
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },

//         unfollow: (userId) => {
//             let action = unfollowAC(userId);
//             dispatch(action);
//         },

//         setUsers: (users) => {
//             dispatch(serUsersAC(users));
//         },

//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },

//         setTotalUsersCount: (totalUsersCount) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount));
//         },

//         toggleIsFeching: (toggleIsFaching) => {
//             let action = toggleIsFecingAC(toggleIsFaching)
//             dispatch(action);
//         },
//     };
// };


export default connect(mapStateToProps, {
    follow,

    unfollow,

    setUsers,

    setCurrentPage,

    setTotalUsersCount,

    toggleIsFeching,

    toggleFollowingInProgress,

    getUsers
}) (UsersAPIComponent);

