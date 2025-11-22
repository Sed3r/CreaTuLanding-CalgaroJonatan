import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getGameById } from "../mock/AsyncService";
import ItemDetail from "./ItemDetail";
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

    if (loading) return <p>Cargando detalle…</p>;
    if (!game) return <p>Juego no encontrado</p>;

    return <ItemDetail game={game} />;
}

export default ItemDetailContainer;
