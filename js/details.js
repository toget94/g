const detailContainer = document.querySelector(".game-details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const url = "https://thomasmelhus.one/wp-json/wc/store/products" + id;
console.log(url);

async function fetchGame() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);
      
    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }
    
}

fetchGame();

function createHtml(details) {
    detailContainer.innerHTML = `<h1>${product.name}</h1>
                                <div class="details-image" 
                                    style="background-image: url('${product.background_image}')"></div>
                                <div class="details-description">${product.description}</div>
                                <time class="details-date">Released: ${product.released}</time>`;
};