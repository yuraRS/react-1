import { connect } from "react-redux";
import Header from "./Header";
import React from "react";
import { authMe, getProfile } from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
            // authApi.authMe()
            // .then((data) => {
            //     if(data.resultCode === 0) {
            //         let {id, email, login} = data.data;
            //         this.props.setUserAuth(id, email, login);
            //     }
            // })
            this.props.authMe()

            if(this.props.userId) {
                // profileApi.getProfileId(this.props.userId)
                // .then((data) => {
                //     this.props.setProfileAuth(data)
                // })
                this.props.getProfile(this.props.userId)
            }
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
    authMe,
    getProfile
}) (HeaderContainer);