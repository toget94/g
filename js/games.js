const baseUrl = "https://thomasmelhus.one/wp-json/wc/store/products";
const productContainer = document.querySelector(".product-list");

async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();
    products.forEach(function(product){
        productContainer.innerHTML += `
        <div class= "product"><h2>${product.name}</h2>
        <img src= "${product.images[0].src}" alt="${product.name}">
        </div>`
    })
    console.log(products);
}

getProducts(baseUrl);