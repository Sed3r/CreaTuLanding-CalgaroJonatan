const games = [
    {
        id: 1,
        title: "Elden Ring",
        category: "accion",
        price: 60,
        image: "/public/img/Elden Ring.jpg",
        description: "Un épico RPG de mundo abierto creado por FromSoftware, lleno de desafíos, magia y jefes imponentes.",
    },

    {
        id: 2,
        title: "Zelda: Tears of the Kingdom",
        category: "aventura",
        price: 70,
        image: "/public/img/Zelda Tears of the Kingdom.jpg",
        description: "Explora el vasto reino de Hyrule con nuevas habilidades, islas flotantes y una historia inolvidable.",
    },

    {
        id: 3,
        title: "FIFA 26",
        category: "deportes",
        price: 50,
        image: "/public/img/FIFA26.jpg",
        description: "Vive la emoción del fútbol con realismo mejorado, nuevas licencias y modos de juego competitivos.",
    },

    {
        id: 4,
        title: "God of War Ragnarök",
        category: "accion",
        price: 65,
        image: "/public/img/God of War Ragnarok.jpg",
        description: "Acompaña a Kratos y Atreus en una aventura épica mientras enfrentan a los dioses nórdicos en su destino final.",
    },

    {
        id: 5,
        title: "Horizon Forbidden West",
        category: "aventura",
        price: 60,
        image: "/public/img/Horizon Forbidden West.jpg",
        description: "Acompaña a Aloy a descubrir los misterios del Oeste Prohibido en una historia llena de máquinas salvajes.",
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
