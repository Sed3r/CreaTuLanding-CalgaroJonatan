import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getGameById } from "../mock/AsyncService";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";
import "../css/ItemDetailContainer.css";

function ItemDetailContainer() {
    const { itemId } = useParams();
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();

    useEffect(() => {
        setLoading(true);
        getGameById(itemId)
            .then((data) => setGame(data))
            .finally(() => setLoading(false));
    }, [itemId]);

    const handleAddToCart = (quantity) => {
        addToCart(game, quantity);
        alert(`Agregaste ${quantity} copia(s) de ${game.title} al carrito`);
    };

    if (loading) return <p className="loading">Cargando detalle...</p>;
    if (!game) return <p>Juego no encontrado.</p>;

    return (
    <div className="detail-container">
        <img src={game.image} alt={game.title} />
        <div className="detail-info">
            <h2>{game.title}</h2>
            <p className="category">Categoría: {game.category}</p>
            <p className="price">Precio: ${game.price}</p>
            <p className="description">{game.description}</p>
            <ItemCount stock={5} initial={1} onAdd={handleAddToCart} />
        </div>
    </div>
    );
}

export default ItemDetailContainer;
