import { useContext } from "react";
import ThemeContext from "../context/theme/ThemeContext"
//
const Footer = () => {
    const {darkMode} = useContext(ThemeContext);
    return (
        <footer className={darkMode ? 'bg-black' : 'bg-white'}>
            <div className={darkMode ? "footer-copyright text-center text-info mt-1" 
                                     : "footer-copyright text-center text-primary-emphasis mt-1"} 
            
            
            >© 2024 Copyright:
                <a> GMayaS C:\{">"}Desarrollo en Sistemas.</a>
            </div>
        </footer>
    )
}

export default Footer;





