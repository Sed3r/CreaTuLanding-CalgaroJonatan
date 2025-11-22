import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../css/Cart.css";

function Cart() {
    const { cart, removeItem, clearCart, totalPrice } = useCart();

    if (cart.length === 0) {
        return <p className="empty-cart">Tu carrito está vacío 🛒</p>;
    }

    return (
        <div className="cart-container">
            <h2>Tu carrito</h2>

            {cart.map((item) => (
                <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.title} />
                    <div>
                        <h3>{item.title}</h3>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Subtotal: ${item.price * item.quantity}</p>
                        <button onClick={() => removeItem(item.id)}>Eliminar</button>
                    </div>
                </div>
            ))}

            <h3 className="total-price">Total: ${totalPrice}</h3>

            <div className="cart-buttons">
                <button className="clear-btn" onClick={clearCart}>Vaciar carrito</button>

                <Link to="/checkout" className="checkout-btn">
                    Finalizar compra
                </Link>
            </div>
        </div>
    );
}

export default Cart;