

let laptopItem=document.getElementById("lap1");

function categoryItems() {
    fetch('http://localhost:3006/getAll')
    .then(response => response.json())
    .then(data => loadHTMLTable(data));
    
}

function createAndAppendProduct(product) {
    let {
        id,
        imageUrl,
        name,
        gen,
        core,
        description,
        review,
        price
    } = product;
    let productId = "product" + id;

    let productElement = document.createElement("li");
    productElement.classList.add("product-item-container", "d-flex", "flex-row");
    productElement.id = productId;
    productListContainer.appendChild(productElement);

    let productContainer = document.createElement("div");
    productContainer.classList.add("product-container", "d-flex", "flex-row");
    productElement.appendChild(productContainer);

    let headingEl = document.createElement('h1');
    headingEl.textContent = name;
    productContainer.appendChild(headingEl);

    let imageEl = document.createElement("img");
    imageEl.classList.add("image", "mt-auto", "mb-auto");
    imageEl.src = imageUrl;
    productContainer.appendChild(imageEl);
    
    let priceEl = document.createElement('h2');
    priceEl.textContent = price;
    productContainer.appendChild(priceEl);

    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("author-name");
    descriptionEl.textContent = description;
    productContainer.appendChild(descriptionEl);
}

//laptopItem.addEventListener("click",categoryItems)

function loadHTMLTable(data) {
   

    if (data.length === 0) {
       
        return;
    }

    console.log(data.data[0]);

    for (let item of data.data) {
        createAndAppendProduct(item)
    }

}