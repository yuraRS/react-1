import { connect } from "react-redux";
import Header from "./Header";
import React from "react";
import { setProfileAuth, setUserAuth } from "../../redux/auth-reducer";
import axios from "axios";


class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then((response) => {
                if(response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setUserAuth(id, email, login);
                }
            })
            .then(() => {
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`, {withCredentials: true})
                .then((response) => {
                    this.props.setProfileAuth(response.data)
                })
            })
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
};



let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        userId: state.auth.userId,
        profileAuth: state.auth.profileAuth,
    };
};


export default connect(mapStateToProps, {
    setUserAuth,
    setProfileAuth
}) (HeaderContainer);