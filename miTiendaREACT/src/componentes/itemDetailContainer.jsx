import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getGameById } from "../mock/AsyncService";
import ItemCount from "./ItemCount";
import "../css/ItemDetailContainer.css";

function ItemDetailContainer() {
    const { itemId } = useParams();
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getGameById(itemId)
            .then((data) => setGame(data))
            .finally(() => setLoading(false));
    }, [itemId]);

    const handleAddToCart = (quantity) => {
        alert(`Agregaste ${quantity} copia(s) de ${game.title} al carrito`);
    };

    if (loading) return <p className="loading">Cargando detalle...</p>;
    if (!game) return <p>Juego no encontrado.</p>;

    return (
    <div className="detail-container">
        <img src={game.image} alt={game.title} />
        <div className="detail-info">
            <h2>{game.title}</h2>
            <p>Categoría: {game.category}</p>
            <p>Precio: ${game.price}</p>
            <ItemCount stock={5} initial={1} onAdd={handleAddToCart} />
        </div>
    </div>
    );
}

export default ItemDetailContainer;
