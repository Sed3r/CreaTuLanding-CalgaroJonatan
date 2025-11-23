AfterWork Store

AfterWork Store es una Single Page Application (SPA) desarrollada en React, que simula una tienda online con catálogo de productos, detalle individual, carrito de compras y proceso de checkout con generación de órdenes en Firebase.

Este proyecto fue desarrollado como entrega final del curso de React (Coderhouse).

🚀 Características principales

🛍️ Catálogo dinámico

- Listado de productos cargados desde Firestore.

- Vista detallada con imágenes, descripción, precio y stock.

➕ Carrito de compras

- Manejo global del estado usando Context API.

- Cálculo automático de subtotales y total.

- Control de cantidades y validación de stock.

🧮 ItemCount

- Selector de unidades con límite por stock.

- Se oculta luego de agregar al carrito.

🧭 Navegación

- Implementada con React Router.

- Rutas: Inicio, Categorías, Detalle, Carrito y Checkout.

- Navegación sin recargas (SPA).

🧾 Checkout

- Formulario de datos del comprador.

- Validaciones básicas.

- Actualización del stock en Firebase.

- Generación de documento “orders” en Firestore.

- SweetAlert con ID de la compra.

🔥 Firebase

- Firestore como base de datos.

- Colección games

- Colección orders para registrar compras

📦 Tecnologías utilizadas

- React

- React Router DOM

- Context API

- Firebase / Firestore

- CSS

- SweetAlert2

- Vite

📁 Estructura del proyecto (simplificada)

src/
 ├─ componentes/
 │   ├─ NavBar.jsx
 │   ├─ CartWidget.jsx
 │   ├─ ItemListContainer.jsx
 │   ├─ ItemList.jsx
 │   ├─ Item.jsx
 │   ├─ ItemDetailContainer.jsx
 │   ├─ ItemDetail.jsx
 │   ├─ ItemCount.jsx
 │   ├─ Cart.jsx
 │   ├─ CartItem.jsx
 │   └─ CheckoutForm.jsx
 ├─ context/
 │   └─ CartContext.jsx
 ├─ service/
 │   └─ firebase.jsx
 ├─ css/
 │   └─ (estilos varios)
 └─ App.jsx


📚 Documentación extra

Este proyecto incluye todos los requisitos solicitados en la entrega final del curso, como:
✔ Catálogo dinámico
✔ Detalles
✔ Carrito
✔ Context
✔ Firestore
✔ Checkout
✔ Orden generada
✔ Renderizado condicional
✔ Buenas prácticas de componentes y estructura

👤 Autor

Desarrollado por Jonatan Calgaro.