import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="sticky top-0 bg-white shadow-md z-50">
            <NavLink to="/" className={({ isActive }) =>
                isActive ? "active" : ""
            }>Home</NavLink>
            <NavLink to="/services" className={({ isActive }) =>
                isActive ? "active" : ""
            }>Services</NavLink>
            <NavLink to="/reviews" className={({ isActive }) =>
                isActive ? "active" : ""
            }>Reviews</NavLink>
            <NavLink to="/gallery" className={({ isActive }) =>
                isActive ? "active" : ""
            }>Gallery</NavLink>
            <NavLink to="/contact" className={({ isActive }) =>
                isActive ? "active" : ""
            }>Contact</NavLink>
        </nav>
    );
}