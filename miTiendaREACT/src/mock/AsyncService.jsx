const games = [
    {   
        id: 1, 
        title: "Elden Ring",
        category: "accion",
        price: 60,
        image: "/public/img/Elden Ring.jpg"
    },
    
    { 
        id: 2, 
        title: "Zelda: Tears of the Kingdom", 
        category: "aventura", 
        price: 70, 
        image: "/public/img/Zelda Tears of the Kingdom.jpg" 
    },
    
    { 
        id: 3, 
        title: "FIFA 24", 
        category: "deportes", 
        price: 50, 
        image: "/public/img/FIFA 24.jpg" 
    },
    
    { 
        id: 4, 
        title: "God of War Ragnarök", 
        category: "accion", 
        price: 65, 
        image: "/public/img/God of War Ragnarok.jpg" 
    },
    
    { 
        id: 5, 
        title: "Horizon Forbidden West", 
        category: "aventura", 
        price: 60, 
        image: "/public/img/Horizon Forbidden West.jpg" 
    },
];

export const getGames = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (categoryId) {
                resolve(games.filter((game) => game.category === categoryId));
            } else {
                resolve(games);
            }
        }, 1000);
    });
};


export const getGameById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(games.find((g) => g.id === parseInt(id)));
        }, 1000);
    });
};

export default games;