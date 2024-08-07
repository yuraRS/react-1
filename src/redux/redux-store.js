import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sitebarReducer from "./sitebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import { thunk } from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sitebarPage: sitebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(thunk));



export default store;