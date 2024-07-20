import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToPropsForAuthComponent = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export let withAuthNavigate = (Component) => {

    let navigateComponent = (props) => {
        if(!props.isAuth) return <Navigate to={'/login'} />;

        return <Component {...props} />
    }

    let ConnectedAuthComponent = connect(mapStateToPropsForAuthComponent) (navigateComponent);

    return navigateComponent;
};



export default withAuthNavigate;