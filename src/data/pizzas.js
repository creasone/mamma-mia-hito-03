const image = (fileName) => `${import.meta.env.BASE_URL}images/${fileName}`;

// Datos locales entregados al catálogo mediante props.
export const pizzas = [
  { id: "p001", name: "napolitana", price: 5950, ingredients: ["mozzarella", "tomates", "jamón", "orégano"], img: image("napolitana.svg") },
  { id: "p002", name: "española", price: 7250, ingredients: ["mozzarella", "tomates", "jamón", "choricillo"], img: image("espanola.svg") },
  { id: "p003", name: "salame", price: 5990, ingredients: ["mozzarella", "tomates", "salame", "orégano"], img: image("pepperoni.svg") },
  { id: "p004", name: "cuatro estaciones", price: 9590, ingredients: ["mozzarella", "salame", "aceitunas", "champiñones"], img: image("espanola.svg") },
  { id: "p005", name: "bacon", price: 6450, ingredients: ["mozzarella", "tomates cherry", "bacon", "orégano"], img: image("pepperoni.svg") },
  { id: "p006", name: "pollo picante", price: 8500, ingredients: ["mozzarella", "pimientos", "pollo grillé", "orégano"], img: image("napolitana.svg") },
];

// Carrito inicial usado para practicar estados y eventos en este hito.
export const pizzaCart = [
  { ...pizzas[0], count: 2 },
  { ...pizzas[1], count: 1 },
];
