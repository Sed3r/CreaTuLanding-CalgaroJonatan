import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "../css/NavBar.css";

function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">
            🎮 AfterWork Store
            </Link>

            <div className="nav-links">
                <ul>
                    <li><Link to="/category/accion">Acción</Link></li>
                    <li><Link to="/category/aventura">Aventura</Link></li>
                    <li><Link to="/category/deportes">Deportes</Link></li>
                </ul>
            </div>

            <CartWidget />
        </nav>
    );
}

export default NavBar;


