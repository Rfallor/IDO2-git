
// JavaScript code
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

function displayProducts(products) {
    const productList = document.getElementById("product-list");

    // Clear existing product list
    productList.innerHTML = "";

    // Generate new product list
    for (let i = 0; i < products.length; i++) {
        const li = document.createElement("li");
        li.textContent = products[i];
        productList.appendChild(li);
    }
}

function searchProducts(query) {
    // Filter products based on query
    const filteredProducts = products.filter((product) => {
        return product.toLowerCase().includes(query.toLowerCase());
    });

    return filteredProducts;
}

// Event listener for search input
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", () => {
    const query = searchInput.value;
    const filteredProducts = searchProducts(query);
    displayProducts(filteredProducts);
});

// Display initial product list
displayProducts(products);

