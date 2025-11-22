import "../css/ItemCount.css";
import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);

    const increase = () => {
        if (count < stock) setCount(count + 1);
    };

    const decrease = () => {
        if (count > 1) setCount(count - 1);
    };

    return (
        <div className="item-count">
            <button onClick={decrease}>-</button>
            <span>{count}</span>
            <button onClick={increase}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;

