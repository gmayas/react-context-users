import './App.css';
// componenets
import Profile from './components/profile';
import UserList from './components/userList';
import Header from "./components/Header";
import Footer from "./components/Footer";
// Context
import React, { useContext } from "react";
import UserState from './context/user/UserState';
import ThemeContext from "./context/theme/ThemeContext";
//
const App = () => {
  //
  const { darkMode } = useContext(ThemeContext);
  let mode = "dark";
  if (darkMode) { mode = "dark" } else { mode = "light" };
  document.querySelector("body").setAttribute("data-bs-theme-me", mode)
  //
  return (
    <>
      <Header title="React App Context" />
      <UserState>
        <div className="container mt-1">
          <div className="row">
            <div className="col-md-7">
              <UserList />
            </div>
            <div className="col-md-5">
              <Profile />
            </div>
          </div>
        </div>
      </UserState>
      <Footer />
    </>
  );
}

export default App;
