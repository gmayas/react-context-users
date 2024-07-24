import React, { useReducer } from "react";
import UserReducer from "./UserReducer";
import UserContext from "./UserContext";
import axios from "axios";
const url = 'https://reqres.in';

//
const UserState = (props) => {
    //
    const initialState = {
        users: [],
        selectedUser: null
    };
    //
    const [state, dispatch] = useReducer(UserReducer, initialState);
    //
    const getUsers = async (state) => {
        try {
            const users = await axios.get(`${url}/api/users`);
            dispatch({
                type: 'GET_USERS',
                payload: users.data.data
            })
        }
        catch (e) {
            console.log('error:', e);
        }
    };

    //
    const getProfile = async (id) => {
        try {
            const user = await axios.get(`${url}/api/users/${id}`);
            dispatch({
                type: 'GET_PROFILE',
                payload: user.data.data
            })
        }
        catch (e) {
            console.log('error:', e);
        }
    };
    //
    return (
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile
        }}>
            {props.children}
        </UserContext.Provider>
    );
    //
};
//
export default UserState;
