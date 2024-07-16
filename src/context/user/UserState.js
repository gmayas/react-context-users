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
       try{
        const users = await axios.get(`${url}/api/users`);
        console.log('Users:', users);
        return users
       }
       catch (e) {
        console.log('error:', e);
        return []
       }
    };
    //
    const getProfile = async (id) => {
        try{
            const user = await axios.get(`${url}/api/users/${id}`);
            return user
           }
           catch (e) {
            console.log('error:', e);
            return {}
           }
    };
    //
    return (
        <UserContext.Provider value={{
            state: state.users,
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
