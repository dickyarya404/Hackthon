import myJson from "../products.json" assert { type: "json" };
let items = myJson;

      //relese 0
var tampungBarang = document.getElementById("listBarang");

function tampilBarang(data) {
    var tampung = "";
    for (var i = 0; i < data.length; i++) {
        tampung += `
            <!-- Component Card dari Bootstrap -->
            <div class="col-lg-3 col-md-6 my-4 d-flex justify-content-evenly">
                <div class="card" style="width: 24rem;">
                    <img src="${data[i].image[0]}" alt="" />
                    <div class="card-body text-center py-1">
                        <h6 class="card-title" id="itemName"><b>${data[i].name}</b></h6>
                        <p class="text-danger mb-1">Rp ${data[i].price}</p>
                        <p class="card-text" id="itemDesc">${data[i].about}</p>
                        <div class="line mb-2"></div>
                        <a href="detail.html" id="${data[i].id}" onclick="setId(this.id)" class="btn btn-primary" style="background-color: #ED537B; border: none;">View Product</a>
                    </div>
                </div>
            </div>
        `;
    }

    tampungBarang.innerHTML = tampung;
}
tampilBarang(items);

function filter(kataKunci) {
    var filteredItem = [];
    for (var j = 0; j < items.length; j++) {
        var barang = items[j];
        let namaBarang = barang.name;

        var isMatch = namaBarang.toLowerCase().includes(kataKunci.toLowerCase());

        if (isMatch == true) {
            filteredItem.push(barang);
            }
    }
    return filteredItem;
}

var formSearch = document.getElementById("formItem");
formSearch.addEventListener("submit", function (event) {
    event.preventDefault();
    var inputPencarian = document.getElementById("keyword").value;
    var filterInput = filter(inputPencarian);

    tampilBarang(filterInput);
});

var inputPencarian = document.getElementById("keyword");
inputPencarian.addEventListener("keyup", function (event) {
    var isiPencarian = event.target.value;

    var pencariandengankeyup = filter(isiPencarian);
    tampilBarang(pencariandengankeyup);
});

function filterCategory(category) {
    let filteredItem = [];
    for (let j = 0; j < items.length; j++) {
        let barang = items[j];
        let namaBarang = barang.category;

        if (namaBarang == category) {
            filteredItem.push(barang);
            }
    }

    return filteredItem;
}

let hairCare = document.getElementById("hair-care");
hairCare.addEventListener("click", function () {
    var category = hairCare.innerText;
    var filterInput = filterCategory(category);

    tampilBarang(filterInput);
});

let hairColor = document.getElementById("hair-color");
hairColor.addEventListener("click", function () {
    var category = hairColor.innerText;
    var filterInput = filterCategory(category);

    tampilBarang(filterInput);
});

let cosmetic = document.getElementById("cosmetic");
cosmetic.addEventListener("click", function () {
    var category = cosmetic.innerText;
    var filterInput = filterCategory(category);

    tampilBarang(filterInput);
});

let allProduct = document.getElementById("all-product");
allProduct.addEventListener("click", function () {
    tampilBarang(items);
});
