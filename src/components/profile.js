import React, { useContext } from "react";
import UserContext from "../context/user/UserContext";
import ThemeContext from "../context/theme/ThemeContext"

const Profile = () => {
    const { selectedUser } = useContext(UserContext);
    const { darkMode } = useContext(ThemeContext);

    return (
        <>
            {selectedUser ? (
                <div className={darkMode ? "card card-body text-center bg-item-dark" 
                                         : "card card-body text-center bg-item-light"} 
                >
                    <img
                        src={selectedUser.avatar}
                        alt="user selected"
                        className="card-img-top img-fluid rounded-circle m-auto"
                        style={{ width: 180 }}
                    />
                    <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
                    <h3>email: {selectedUser.email}</h3>
                </div>
            ) : (
                <div className="text-center">
                    <h3>No User selected</h3>
                </div>
            )}
        </>
    );
};

export default Profile;