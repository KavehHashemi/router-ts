import { Link } from "react-router-dom";
import "../styles/Navbar.css"
const Navbar = () => {
    return (
        <div className="container">
            <div>
                <Link to="/">
                    HOME
                </Link>
            </div>
            <div>
                <Link to="/skills">
                    SKILLS
                </Link>
            </div>
            <div>
                <Link to="/projects">
                    PROJECTS
                </Link>
            </div>
            <div>
                <Link to="/contact" >
                    CONTACT
                </Link>
            </div>
        </div>
    );
};

export default Navbar;