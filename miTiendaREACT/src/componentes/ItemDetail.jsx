import { useState } from "react";
import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount";
import "../css/ItemDetail.css";

function ItemDetail({ game }) {

    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    const handleAdd = (quantity) => {
        addToCart(game, quantity);
        setAdded(true);
    };

    return (
        <div className="detail-container">
            <img src={game.image} alt={game.title} />
            <div className="detail-info">
                <h2>{game.title}</h2>
                <p className="category">Categoría: {game.category}</p>
                <p className="price">Precio: ${game.price}</p>
                <p className="description">{game.description}</p>

                {!added ? (
                    <ItemCount stock={5} initial={1} onAdd={handleAdd} />
                ) : (
                    <p className="success">¡Producto agregado al carrito!</p>
                )}
            </div>
        </div>
    );
}

export default ItemDetail;