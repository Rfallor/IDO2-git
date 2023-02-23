
const products = [
    "Grand Theft Auto V",
    "The Lagend of Zelda: Breath of the Wild",
    "The Legend of Zelda: Ocarina of Time",
    "Portal 2",
    "Red Dead Redemption 2",
    "The Last of Us",
    "BioShock",
    "Half-Life 2",
    "Mass Effect 2",
    "Minecraft"
];


const productList = document.getElementById("productList");
for (let i = 0; i < products.length; i++) {
    const li = document.createElement("li");
    li.textContent = products[i];
    productList.appendChild(li);
}


function searchProducts(query) {
    return products.filter(product => product.toLowerCase().includes(query.toLowerCase()));
}


const searchInput = document.getElementById("search");
searchInput.addEventListener("input", () => {
    // Use another loop to display the filtered list of products to the user.
    const filteredProducts = searchProducts(searchInput.value);
    productList.innerHTML = "";
    for (let i = 0; i < filteredProducts.length; i++) {
        const li = document.createElement("li");
        li.textContent = filteredProducts[i];
        productList.appendChild(li);
    }
});
