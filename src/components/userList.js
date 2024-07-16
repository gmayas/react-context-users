import React, { useEffect, useContext } from "react";
import UserContext from "../context/user/UserContext";
//
const UserList = () => {
    //
    const { getUser } = useContext(UserContext);
    //
    useEffect( () => {
          getUser();
    },[])

    return (
     <div>
        User List
     </div>
    );
};

export default UserList;