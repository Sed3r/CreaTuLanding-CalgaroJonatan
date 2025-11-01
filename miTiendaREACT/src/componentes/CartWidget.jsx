import { FaShoppingCart } from "react-icons/fa";
import "../css/CartWidget.css";

function CartWidget() {
    return (
        <div className="cart-widget">
            <FaShoppingCart size={22} color="white" />
        <span className="cart-count">3</span>
    </div>
    );
}

export default CartWidget;
