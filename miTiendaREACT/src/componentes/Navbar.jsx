import '../css/Navbar.css'
import CartWidget from './CartWidget'
import {FaStore} from 'react-icons/fa'

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-logo'>
                <FaStore className='icono'/>
                    <h1 className='logo'>Mi Tienda</h1>
                </div>
                <ul className='nav-links'>
                <li><a href="">Nuevos</a></li>
                <li><a href="">Ofertas</a></li>
                <li><a href="">Mas vendidos</a></li>
                </ul>
            <CartWidget/>
            </nav>
        </>
    )
}

export default Navbar