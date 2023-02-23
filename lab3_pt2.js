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

//Display list of products to user
const productList = document.getElementById('product-list');
for (let i = 0; i < products.length; i++) {
    const productItem = document.createElement('li');
    productItem.textContent = products[i];
    productList.appendChild(productItem);
}

//Search Products
function searchProducts(query) {
    const filteredProducts = [];
    for (let i = 0; i < products.length; i++) {
        const productName = products[i].toLowerCase();
        if (productName.includes(query.toLowerCase())){
            filteredProducts.push(products[i]);
        }
    }

return filteredProducts;
}

//Filter products based on user input
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', () => {
    const query = searchInput.ariaValueMax.trim();
    const filteredProducts = searchProducts(query);
    const productListItems = productList.getElementsByTagName('li');
    for (let i = 0; i < productListItems.length; i++) {
        const productName = productListItems[i].textContent.toLowerCase();
        if (filteredProducts.includes(productName)) {
            productListItems[i].style.display = 'list-item';
        } else {
            productListItems[i].style.display = 'none';
        }
    }
});
