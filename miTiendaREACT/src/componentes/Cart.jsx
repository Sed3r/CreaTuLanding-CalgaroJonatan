import { useCart } from "../context/CartContext";
import "../css/Cart.css";

function Cart() {
    const { cart, removeItem, clearCart } = useCart();

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
                        <p>Precio total: ${item.price * item.quantity}</p>
                        <button onClick={() => removeItem(item.id)}>Eliminar</button>
                    </div>
                </div>
                ))}
            <button className="clear-btn" onClick={clearCart}>Vaciar carrito</button>
        </div>
    );
}

export default Cart;
