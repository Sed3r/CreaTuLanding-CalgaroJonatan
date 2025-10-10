import '../css/Navbar.css'
import CartWidget from './CartWidget'

const Navbar = () => {
    return (
        <>
            <nav className='nav-container'>
                <a href="" className='nav'>Mi Tienda</a>
                <a href="" className='nav'>Nuevos</a>
                <a href="" className='nav'>Ofertas</a>
                <a href="" className='nav'>Mas vendidos</a>
            </nav>
            <CartWidget/>
        </>
    )
}

export default Navbar