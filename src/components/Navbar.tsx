import { Link } from "react-router-dom";
import "../styles/Navbar.css"
import { useState } from "react";
const Navbar = () => {
    const [active, setActive] = useState<string>("/")
    return (
        <div className="navbar-container">
            <div className={active === "/" ? "border-active" : "border-inactive"}>
                <Link to="/" onClick={() => setActive("/")}>
                    HOME
                </Link>
            </div>
            <div className={active === "/skills" ? "border-active" : "border-inactive"}>
                <Link to="/skills" onClick={() => setActive("/skills")}>
                    SKILLS
                </Link>
            </div>
            <div className={active === "/projects" ? "border-active" : "border-inactive"}>
                <Link to="/projects" onClick={() => setActive("/projects")}>
                    PROJECTS
                </Link>
            </div>
            <div className={active === "/contact" ? "border-active" : "border-inactive"}>
                <Link to="/contact" onClick={() => setActive("/contact")}>
                    CONTACT
                </Link>
            </div>
        </div>
    );
};

export default Navbar;