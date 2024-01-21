import myJson from "../products.json" assert { type: "json" };
let items = myJson;

let id = sessionStorage.getItem('id') - 1;
let item = items[id];
console.log(item);

let main = document.getElementById("main");
let html = `
<!-- left -->
<div class="col-5 my-2">
    <!-- img thumbnail -->
    <img src="${item.image[0]}" class="img-fluid img-thumbnail" id="imgThumbnail" style="width: 515px; height: 420px;">
    <!-- img sliders -->
    <div class="row mt-2">
        <div class="col-3">
            <img src="${item.image[0]}" onclick="setImage(this.src)" class="img-fluid rounded-lg" alt="">
        </div>
        <div class="col-3">
            <img src="${item.image[1]}" onclick="setImage(this.src)" class="img-fluid rounded-lg" alt="">
        </div>
        <div class="col-3">
            <img src="${item.image[2]}" onclick="setImage(this.src)" class="img-fluid rounded-lg" alt="">
        </div>
        <div class="col-3">
            <img src="${item.image[3]}" onclick="setImage(this.src)" class="img-fluid rounded-lg" alt="">
        </div>
    </div>
</div>

<!-- right -->
<div class="col-6 offset-1">
    <h4>${item.name}</h4>
    <h6>Rp ${item.price}</h6>
    <hr>

    <!-- accordion -->
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    About
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                ${item.about}
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Detail & Ingredients
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                ${item.detail}
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    How To Use
                </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                ${item.guide}
                </div>
            </div>
        </div>
    </div>

    <!-- button -->
    <div class="row px-3 mt-4">
        <!-- modal -->
        <button type="button" class="btn btn-primary rounded-pill" data-bs-toggle="modal"
            data-bs-target="#exampleModal">Buy Now</button>

        <!-- modal body -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Pilih Toko</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row justify-content-center text-center g-2">
                            <div class="col-4">
                                <div class="card position-relative">
                                    <a href="${item.beauty}" class="btn" id="beauty">
                                        <img src="../frontend/assets/icon-shop/m1.png" alt="" style="height: 40px;">
                                    </a>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card">
                                    <a href="${item.zalora}" class="btn" id="zalora">
                                        <img src="../frontend/assets/icon-shop/m2.png" alt="" style="height: 40px;">
                                    </a>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card">
                                    <a href="${item.tiktok}" class="btn" id="tiktok">
                                        <img src="../frontend/assets/icon-shop/m3.png" alt="" style="height: 40px;">
                                    </a>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card">
                                    <a href="${item.tokopedia}" class="btn" id="tokopedia">
                                        <img src="../frontend/assets/icon-shop/m4 .png" alt="" style="height: 40px;">
                                    </a>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card">
                                    <a href="${item.lazada}" class="btn" id="lazada">
                                        <img src="../frontend/assets/icon-shop/m5.png" alt="" style="height: 40px;">
                                    </a>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card">
                                    <a href="${item.shopee}" class="btn" id="shopee">
                                        <img src="../frontend/assets/icon-shop/m6.png" alt="" style="height: 40px;">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- information promo -->
    <div class="row mt-3">
        <div class="d-grid gap-2 col-6 mx-auto">
            <div class="promo rounded text-center">5% offer at <img src="assets/icon-shop/m6.png" alt=""
                    style="height: 40px;">
            </div>
        </div>
    </div>
</div>
`;

main.innerHTML = html;
