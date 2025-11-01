import { Link } from "react-router-dom";
import "../css/Item.css";

function Item({ game }) {
    return (
        <div className="item-card">
            <img src={game.image} alt={game.title} />
            <h3>{game.title}</h3>
            <p>${game.price}</p>
            <Link to={`/item/${game.id}`} className="detail-btn">Ver Detalle</Link>
        </div>
    );
}

export default Item;
