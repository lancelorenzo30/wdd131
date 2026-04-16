const menu = [
    {
        category: "Main Dishes",
        items: [
            {
                name: "Adobo",
                description: "Classic Filipino dish made with soy sauce, vinegar, garlic, and tender meat.",
                image: "images/main/adobo.webp"
            },
            {
                name: "Afritada",
                description: "Tomato-based stew with chicken, potatoes, carrots, and bell peppers.",
                image: "images/main/afritada.webp"
            },
            {
                name: "Bicol Express",
                description: "Spicy pork dish cooked in coconut milk and chili peppers.",
                image: "images/main/bicol-express.webp"
            },
            {
                name: "Caldereta",
                description: "Rich beef stew with liver spread, tomato sauce, and vegetables.",
                image: "images/main/caldereta.webp"
            },
            {
                name: "Honey-butter chicken",
                description: "Crispy chicken coated in a sweet and savory honey butter glaze.",
                image: "images/main/honey-butter-chicken.webp"
            },
            {
                name: "Mechado",
                description: "Beef stew simmered in tomato sauce with potatoes and carrots.",
                image: "images/main/mechado.webp"
            },
            {
                name: "Menudo",
                description: "Savory pork stew with liver, potatoes, carrots, and tomato sauce.",
                image: "images/main/menudo.webp"
            },
            {
                name: "Shanghai",
                description: "Crispy Filipino spring rolls filled with seasoned ground pork.",
                image: "images/main/shanghai.webp"
            },
            {
                name: "Sinigang",
                description: "Sour soup with tamarind broth, vegetables, and meat or seafood.",
                image: "images/main/sinigang.webp"
            }
        ]
    },
    {
        category: "Beverages",
        items: [
            {
                name: "4 Season Juice",
                description: "Refreshing blend of tropical fruits perfect for any occasion.",
                image: "images/beverage/four-season.webp"
            },
            {
                name: "Calamansi Juice",
                description: "Sweet and tangy citrus drink made from fresh calamansi.",
                image: "images/beverage/calamansi.webp"
            },
            {
                name: "Fizzy Grape Juice",
                description: "Sparkling grape drink with a refreshing fruity taste.",
                image: "images/beverage/grape-fizzy.webp"
            },
            {
                name: "Pineapple Juice",
                description: "Naturally sweet and refreshing pineapple drink.",
                image: "images/beverage/pineapple-juice.webp"
            }
        ]
    },
    {
        category: "Desserts",
        items: [
            {
                name: "Almond Jelly",
                description: "Light and refreshing almond-flavored jelly dessert.",
                image: "images/dessert/almond-jelly.webp"
            },
            {
                name: "Buko Salad",
                description: "Sweet coconut salad with fruits and cream.",
                image: "images/dessert/buko-salad.webp"
            },
            {
                name: "Fruit Salad",
                description: "Mixed fruits in sweet creamy dressing.",
                image: "images/dessert/fruit-salad.webp"
            },
            {
                name: "Leche Flan",
                description: "Rich caramel custard dessert.",
                image: "images/dessert/leche-flan.webp"
            },
            {
                name: "Mango Graham",
                description: "Layered dessert with mangoes, cream, and graham crackers.",
                image: "images/dessert/mango-graham.webp"
            },
            {
                name: "Mango Tapioca",
                description: "Sweet mango dessert with tapioca pearls and milk.",
                image: "images/dessert/mango-tapioca.webp"
            }
        ]
    },
    {
        category: "Fruits",
        items: [
            {
                name: "Banana",
                description: "Fresh tropical bananas.",
                image: "images/fruits/banana.webp"
            },
            {
                name: "Grapes",
                description: "Sweet and juicy grapes.",
                image: "images/fruits/grapes.webp"
            },
            {
                name: "Mango",
                description: "Ripe sweet mangoes.",
                image: "images/fruits/mango.webp"
            },
            {
                name: "Orange",
                description: "Fresh citrus oranges.",
                image: "images/fruits/orange.webp"
            },
            {
                name: "Pineapple",
                description: "Tropical sweet pineapple fruit.",
                image: "images/fruits/pineapple.webp"
            },
            {
                name: "Watermelon",
                description: "Refreshing juicy watermelon slices.",
                image: "images/fruits/watermelon.webp"
            }
        ]
    }
];

function displayMenu() {
    const container = document.getElementById("menu-container");
    if (!container) return;
    
    container.innerHTML = menu.map(section => `
        <section class="menu-section">
        <h3 class="category-title">${section.category}</h3>
        <div class="menu-grid">
        ${section.items.map(item => `
            <div class="menu-item">
            <img src="${item.image}" alt="${item.name}" width="230" height="230" loading="lazy">
            <h4>${item.name}</h4>
            <p>${item.description}</p>
            </div>
            `).join("")}
            </div>
            </section>
            `).join("");
}

document.addEventListener("DOMContentLoaded", displayMenu);