import { useState } from "react";
import "../css/ItemCount.css";

function ItemCount({ stock = 5, initial = 1, onAdd }) {
    const [count, setCount] = useState(initial);

    const handleAdd = () => count < stock && setCount(count + 1);
    const handleSub = () => count > 1 && setCount(count - 1);
    const handleConfirm = () => onAdd(count);

    return (
        <div className="item-count">
            <div className="controls">
                <button onClick={handleSub}>-</button>
                <span>{count}</span>
                <button onClick={handleAdd}>+</button>
            </div>
            <button className="add-btn" onClick={handleConfirm}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;

