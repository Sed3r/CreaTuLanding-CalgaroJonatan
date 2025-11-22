import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        const existingItem = cart.find((prod) => prod.id === item.id);

        if (existingItem) {
            setCart(
                cart.map((prod) =>
                    prod.id === item.id
                        ? { ...prod, quantity: prod.quantity + quantity }
                        : prod
                )
            );
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const clearCart = () => setCart([]);

    const totalItems = cart.reduce((acc, prod) => acc + prod.quantity, 0);

    const totalPrice = cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0);

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeItem, clearCart, totalItems, totalPrice }}
        >
            {children}
        </CartContext.Provider>
    );
};
