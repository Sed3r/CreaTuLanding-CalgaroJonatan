import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../css/ItemListContainer.css";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../service/firebase.jsx";

function ItemListContainer() {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

    const gamesCollection = categoryId
        ? query(collection(db, "games"), where("category", "==", categoryId))
        : collection(db, "games");

    getDocs(gamesCollection)
        .then((res) => {
        const gamesList = res.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setGames(gamesList);
        })
        .finally(() => setLoading(false));
    }, [categoryId]);


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