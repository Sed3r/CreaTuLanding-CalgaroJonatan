import '../css/ItemListContainer.css'

const ItemListContainer = ({saludo}) => {
    return (
        <section className="item-list-container">
            <h2>{saludo}</h2>
        </section>
    )
}

export default ItemListContainer