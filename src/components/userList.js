import React, { useEffect, useContext } from "react";
import UserContext from "../context/user/UserContext";
import ThemeContext from "../context/theme/ThemeContext";
//
const UserList = () => {
    //
    const userContext = useContext(UserContext);
    const { darkMode } = useContext(ThemeContext);
    //
    useEffect(() => {
        userContext.getUsers();
    }, []);

    return (
        <div className="list-group h-100">
            {userContext.users.length
                ? userContext.users.map((user) => (
                    <a
                        key={user.id}
                        href="#!"
                        onClick={() => userContext.getProfile(user.id)}
                        className= {darkMode ? "mb-1 list-group-item list-group-item-action active d-flex flex-row justify-content-start" 
                                             : "mb-1 list-group-item list-group-item-action active list-group-item-light d-flex flex-row justify-content-start"}
                    >
                        <img src={user.avatar} alt="" className="img-fluid mr-4 rounded-circle" width="70" />
                        <p>{`${user.first_name} ${user.last_name}`}</p>
                    </a>
                ))
                : null}
        </div>
    );
};

export default UserList;