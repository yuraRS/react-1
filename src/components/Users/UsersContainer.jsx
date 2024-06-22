import { connect } from 'react-redux';
import { follow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFeching, unfollow } from '../../redux/users-reducer';
import axios from 'axios';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFeching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page${this.props.currentPage}`, {
            withCredentials: true,
            headers: {
                'API-KEY': 'bde36a84-eccf-48f5-ad4c-4f4177d3a6b0'
            }
        })
            .then((response) => {
                this.props.toggleIsFeching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPagesChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFeching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`, {
            withCredentials: true,
            headers: {
                'API-KEY': 'bde36a84-eccf-48f5-ad4c-4f4177d3a6b0'
            }
        })
        .then((response) => {
            this.props.toggleIsFeching(false);
            this.props.setUsers(response.data.items);
        });
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
}) (UsersAPIComponent);

