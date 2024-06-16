import { connect } from "react-redux"
import Profile from "./Profile"
import React, { useEffect } from "react";
import axios from "axios";
import { setUserProfile } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";



let ProifleContainer = (props) => {
    let {userId} = useParams();
    if(!userId) {
        userId = 2;
    };

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => {
                props.setUserProfile(response.data)
            })
    }, [userId])


    return (
        <Profile {...props} />
    )
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    };
};


export default connect(mapStateToProps, {setUserProfile}) (ProifleContainer);






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