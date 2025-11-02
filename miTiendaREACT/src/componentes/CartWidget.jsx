import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../css/CartWidget.css";

function CartWidget() {
    const { totalItems } = useCart();

    return (
        <Link to="/cart" className="cart-widget">
            <ShoppingCart size={28} />
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
    );
}

export default CartWidget;

