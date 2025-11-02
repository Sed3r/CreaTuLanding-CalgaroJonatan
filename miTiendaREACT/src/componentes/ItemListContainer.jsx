import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getGames } from "../mock/AsyncService";
import "../css/ItemListContainer.css";

function ItemListContainer() {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
    setLoading(true);
    getGames(categoryId)
        .then((data) => setGames(data))
        .finally(() => setLoading(false));
    }, [categoryId]);

    if (loading) return <p className="loading">Cargando juegos...</p>;

    return (
        <div className="item-list-container">
            {games.map((game) => (
                <div key={game.id} className="item-card">
                    <img src={game.image} alt={game.title} />
                    <h3>{game.title}</h3>
                    <p className="description">
                        {game.description.substring(0, 80)}...
                    </p>
                    <p>${game.price}</p>
                    <Link to={`/item/${game.id}`} className="btn-detail">Ver detalle</Link>
                </div>
            ))}
        </div>
    );
}

export default ItemListContainer;