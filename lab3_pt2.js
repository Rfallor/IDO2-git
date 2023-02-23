
const products = [
    "Grand Theft Auto V",
    "The Legend of Zelda: Breath of the Wild",
    "The Legend of Zelda: Ocarina of Time",
    "Portal 2",
    "Red Dead Redemption 2",
    "The Last of Us",
    "BioShock",
    "Half-Life 2",
    "Mass Effect 2",
    "Minecraft"
];

// Display initial product list
const productList = document.getElementById("productList");

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const li = document.createElement("li");
    li.textContent = product;
    productList.appendChild(li);
}

// Search products function
function searchProducts(query) {
    const filteredProducts = [];

    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        if (product.toLowerCase().includes(query.toLowerCase())) {
            filteredProducts.push(product);
        }
    }

    return filteredProducts;
}

// Search input event listener
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", (event) => {
    const query = event.target.value;
    const filteredProducts = searchProducts(query);

    productList.innerHTML = "";

    for (let i = 0; i < filteredProducts.length; i++) {
        const product = filteredProducts[i];
        const li = document.createElement("li");
        li.textContent = product;
        productList.appendChild(li);
    }
});

