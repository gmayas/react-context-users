import { useContext } from "react";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import toggleOn from "../assets/toggle-on.svg";
import toggleOff from "../assets/toggle-off.svg";
import ThemeContext from "../context/theme/ThemeContext";
//
const Header = (props) => {
    //
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    //
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
                        </ul>
                        <form class="d-flex">
                            <button type="button" className={darkMode ? "btn btn-secondary my-2 my-sm-0" : "btn btn-light my-2 my-sm-0"}
                                data-placement="top" title="Toggle theme"
                                onClick={() => setDarkMode(prev => !prev)}>
                                <img className="ml-4" src={darkMode ? moon : sun} alt="icon"></img>
                                <img src={darkMode ? toggleOn : toggleOff} alt="icon"></img>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;