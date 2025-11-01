import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "../css/NavBar.css";

function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">🎮 AfterWork Store</Link>
            <ul className="nav-links">
                <li><Link to="/category/accion">Acción</Link></li>
                <li><Link to="/category/aventura">Aventura</Link></li>
                <li><Link to="/category/deportes">Deportes</Link></li>
            </ul>
            <FaShoppingCart size={25} className="cart-icon" />
        </nav>
    );
}

export default NavBar;


