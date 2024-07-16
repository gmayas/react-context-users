import './App.css';

// componenets
import Profile from './components/profile';
import UserList from './components/userList';
// Context
import UserState from './context/user/UserState';
//
function App() {
  return (
    <UserState>
        <UserList/>
        <Profile/>
    </UserState>
    );
}

export default App;
