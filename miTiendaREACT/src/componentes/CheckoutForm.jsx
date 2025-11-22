import { useState } from "react";
import { useCart } from "../context/CartContext";
import { db } from "../service/firebase.jsx";
import { collection, addDoc, writeBatch, getDocs, query, where, documentId } from "firebase/firestore";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "../css/CheckoutForm.css";

const CheckoutForm = () => {
    const navigate = useNavigate();
    const { cart, totalPrice, clearCart } = useCart();

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nombre.trim() || !email.trim() || !telefono.trim()) {
            Swal.fire({
                title: "Campos incompletos",
                text: "Por favor completá todos los campos.",
                icon: "warning",
            });
            return;
        }

        setLoading(true);

        const orden = {
            cliente: { nombre, email, telefono },
            items: cart.map((item) => ({
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity,
            })),
            total: totalPrice,
            fecha: new Date(),
        };

        try {
            const batch = writeBatch(db);
            const productosRef = collection(db, "products");
            const ids = cart.map((p) => p.id);

            const productosFirestore = await getDocs(
                query(productosRef, where(documentId(), "in", ids))
            );

            const sinStock = [];

            productosFirestore.docs.forEach((docSnap) => {
                const data = docSnap.data();
                const itemInCart = cart.find((p) => p.id === docSnap.id);

                if (!data) {
                    sinStock.push({
                        nombre: itemInCart.title,
                        motivo: "este producto ya no existe",
                    });
                    return;
                }

                if (data.stock >= itemInCart.quantity) {
                    batch.update(docSnap.ref, {
                        stock: data.stock - itemInCart.quantity,
                    });
                } else {
                    sinStock.push({
                        nombre: data.title,
                        motivo: `stock insuficiente (quedan ${data.stock})`,
                    });
                }
            });

            if (sinStock.length > 0) {
                setLoading(false);

                Swal.fire({
                    title: "No se pudo completar la compra",
                    html: sinStock.map((p) => `${p.nombre}: ${p.motivo}`).join("<br>"),
                    icon: "error",
                });

                return;
            }

            await batch.commit();

            const ordenRef = await addDoc(collection(db, "orders"), orden);

            clearCart();
            setLoading(false);

            Swal.fire({
                title: "¡Compra realizada!",
                html: `
                    <p>Tu número de orden es:</p>
                    <h2><b>${ordenRef.id}</b></h2>
                    <p>Serás redirigido en 4 segundos...</p>
                `,
                icon: "success",
                timer: 4000,
                timerProgressBar: true,
                willClose: () => navigate("/"),
            });

            setNombre("");
            setEmail("");
            setTelefono("");

        } catch (error) {
            setLoading(false);
            Swal.fire({
                title: "Error inesperado",
                text: "Ocurrió un error procesando la compra.",
                icon: "error",
            });
        }
    };

    return (
        <div className="checkout-container">
            <h2 className="checkout-title">Finalizar Compra</h2>

            <form onSubmit={handleSubmit}>
                <input
                    className="checkout-input"
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <input
                    className="checkout-input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="checkout-input"
                    type="text"
                    placeholder="Teléfono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                />

                <button className="checkout-btn" type="submit" disabled={loading}>
                    {loading ? "Procesando..." : "Confirmar compra"}
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;
