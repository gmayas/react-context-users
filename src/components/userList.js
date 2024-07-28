import React, { useEffect, useContext } from "react";
import UserContext from "../context/user/UserContext";
//
const UserList = () => {
    //
    const userContext = useContext(UserContext);
    //
    useEffect(() => {
        userContext.getUsers();
    }, []);

    return (
        <div className="list-group-me h-100">
            {userContext.users.length
                ? userContext.users.map((user) => (
                    <a
                        key={user.id}
                        href="#!"
                        onClick={() => userContext.getProfile(user.id)}
                        className= "mb-1 list-group-item list-group-item-action active d-flex flex-row justify-content-start">
                        <img src={user.avatar} alt="" className="img-fluid mr-4 rounded-circle" width="70" />
                        <p>{`${user.first_name} ${user.last_name}`}</p>
                    </a>
                ))
                : null}
        </div>
    );
};

export default UserList;