import "../css/ItemDetail.css";

const ItemDetail = ({ product }) => {
    return (
        <div className="item-detail">
            <img
                src={product.img}
                alt={product.title}
                className="item-detail-image"
            />
        <div className="item-detail-info">
            <h2>{product.title}</h2>
            <p className="category">Categoría: {product.category}</p>
            <p className="description">{product.description}</p>
            <p className="price">${product.price}</p>
        </div>
        </div>
    );
};

export default ItemDetail;
