import myJson from "../database.json" assert {type: 'json'};
let products = myJson;
console.log(products);

let main = document.getElementById("main");
products.forEach(product => {
    let card = document.createElement("div");
    card.classList.add("card");
    let text = `
    id = ${product.id}
    id = ${product.name}
    id = ${product.category}
    id = ${product.price}
    `;
    card.innerText = text;
    main.appendChild(card);
});

document.getElementById("hair-care").addEventListener("click", function () {
    sessionStorage.setItem('category', 'Hair Care');
    console.log(sessionStorage.getItem('category'));
});

document.getElementById("hair-color").addEventListener("click", function () {
    sessionStorage.setItem('category', 'Hair Color');
    console.log(sessionStorage.getItem('category'));
});

document.getElementById("cosmetic").addEventListener("click", function () {
    sessionStorage.setItem('category', 'Cosmetic');
    console.log(sessionStorage.getItem('category'));
});

let items = products.filter(function (product) {
    return product.category
})

let id = sessionStorage.getItem('id') - 1;
console.log(products[id]);