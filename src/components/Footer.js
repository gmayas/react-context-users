import { useContext } from "react";
import ThemeContext from "../context/theme/ThemeContext"
const Footer = () => {
    const {darkMode} = useContext(ThemeContext);
    return (
        <footer className={darkMode ? 'bg-black' : 'bg-white'}>
            <div className="footer-copyright text-center text-primary mt-3">© 2024 Copyright:
                <a> GMayaS C:\{">"}Desarrollo en Sistemas.</a>
            </div>
        </footer>
    )
}

export default Footer;





