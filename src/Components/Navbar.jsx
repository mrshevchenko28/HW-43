import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className={({ isActive }) => isActive ? "button active" : "button"}>Home</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "button active" : "button"}>Contact</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "button active" : "button"}>About</NavLink>
        </nav>
    )
}

export default Navbar