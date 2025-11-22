import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase.jsx";
import { useCart } from "../context/CartContext";
import "../css/CheckoutForm.css";

function CheckoutForm() {
    const { cart, clearCart } = useCart();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !phone.trim()) {
            alert("Por favor completa todos los campos.");
            return;
        }

        setLoading(true);

        try {
            const order = {
                buyer: { name, email, phone },
                items: cart,
                total,
                date: serverTimestamp(),
            };

            const docRef = await addDoc(collection(db, "orders"), order);
            setOrderId(docRef.id);
            clearCart();
        } catch (error) {
            console.error("Error creando la orden: ", error);
        } finally {
            setLoading(false);
        }
    };

    if (orderId) {
        return (
            <div className="order-success">
                <h2>¡Compra realizada con éxito! 🎉</h2>
                <p>Tu ID de orden es:</p>
                <strong className="order-id">{orderId}</strong>
            </div>
        );
    }

    if (cart.length === 0) {
        return <p className="empty-cart">Tu carrito está vacío 🛒</p>;
    }

    return (
        <div className="checkout-container">
            <h2>Finalizar compra</h2>

            <div className="summary">
                <h3>Resumen:</h3>
                {cart.map((item) => (
                    <p key={item.id}>
                        {item.title} x {item.quantity} → ${item.price * item.quantity}
                    </p>
                ))}
                <h3>Total: ${total}</h3>
            </div>

            <form className="checkout-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="tel"
                    placeholder="Teléfono"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Procesando..." : "Confirmar compra"}
                </button>
            </form>
        </div>
    );
}

export default CheckoutForm;