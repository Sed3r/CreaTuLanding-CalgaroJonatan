import { Link } from "react-router-dom";
import "../css/ItemListContainer.css";

function Item({ game }) {
    return (
        <div className="item-card">
            <img src={game.image} alt={game.title} />
            <div className="card-body">
                <h3>{game.title}</h3>
                <p className="description">{game.description.slice(0,80)}...</p>
                <p className="price">${game.price}</p>
                <Link to={`/item/${game.id}`} className="btn-detail">Ver detalle</Link>
            </div>
        </div>
    );
}

export default Item;
