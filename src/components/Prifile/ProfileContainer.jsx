import { connect } from "react-redux"
import Profile from "./Profile"
import React, { useEffect } from "react";
import axios from "axios";
import { getProfileId, setUserProfile } from "../../redux/profile-reducer";
import { Navigate, useParams } from "react-router-dom";
import { profileApi } from "../../api/api";
import withAuthNavigate from "../../hoc/withAuthNavigate";




let ProifleContainer = (props) => {
    let {userId} = useParams();
    if(!userId) {
        userId = 2;
    };

    useEffect(() => {
        props.getProfileId(userId);
    }, [userId])

    
    
    return (
        
        <Profile {...props} />
    )
}



let AuthNavigateComponent = withAuthNavigate(ProifleContainer)



let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    };
};


export default connect(mapStateToProps, {getProfileId}) (AuthNavigateComponent);






// class ProifleContainer extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
//             .then((response) => {
//                 this.props.setUserProfile(response.data)
//             })
//     }


//     render() {
//         return (
//             <Profile {...this.props} />
//         )
//     }
// }