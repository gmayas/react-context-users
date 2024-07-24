import { useContext } from "react";
import darkLogo from "../assets/darkLogo.svg";
import lightLogo from "../assets/lightLogo.svg";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import ThemeContext from "../context/theme/ThemeContext";

const Header = (props) => {
    const {darkMode, setDarkMode} = useContext(ThemeContext);
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={darkMode ? "dark" : "light"}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home
                                    <span className="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <div className="logo-container">
                                    <img src={darkMode ? lightLogo : darkLogo}></img>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <div className="icon-container"
                                onClick={()=>setDarkMode(prev=>!prev)}>
                                    <img src={darkMode ? sun : moon} alt="icon"></img>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;