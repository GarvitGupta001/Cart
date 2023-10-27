var totalItems = document.getElementById("totalItems");
var detailedItems = document.getElementById("detailedItems");
var totalPrice = document.getElementById("totalPrice");
var shipping = document.getElementById("shipping");
var products = [];
var backpack = [];
var camera = [];
var removed = [];
var cartTotal = 0;
var removedTotal = 0;
var Backpack = {
    name: Backpack,
    price: 200
}
var Camera = {
    name: Camera,
    price: 500
}
function showDetails() {
    var details = document.getElementById("details");
    details.classList.toggle("disappear");
}
function add(Product) {
    products.push(Product);
    totalItems.innerHTML = products.length;
    cartTotal = 0
    for (let i = 0; i < products.length; i++) {
        if (products[i] === Backpack) {
            var removeBackpack = document.getElementById("removeBackpack");
            removeBackpack.classList.add("addItem");
            removeBackpack.classList.remove("removeItem");
            removeBackpack.innerHTML = "Remove";
        }
        if (products[i] === Camera) {
            var removeCamera = document.getElementById("removeCamera");
            removeCamera.classList.add("addItem");
            removeCamera.classList.remove("removeItem");
            removeCamera.innerHTML = "Remove";
        }
        cartTotal = cartTotal + products[i].price;        
    }
    if (Product === Backpack) {
        backpack.push(Product);
    } else if (Product === Camera) {
        camera.push(Product);
    }
    if (cartTotal >= 1500) {
        shipping.innerHTML = "Shipping: $10"
    } else if (cartTotal < 1500) {
        shipping.innerHTML = "Shipping: $50"
    }
    detailedItems.innerHTML = "Backpack: " + backpack.length + " , " + "Camera: " + camera.length;
    totalPrice.innerHTML = "Cart Total: $" + cartTotal;
}
function remove(Product) {
    products.pop();
    removed.push(Product);
    cartTotal = cartTotal - Product.price;
    totalItems.innerHTML = products.length;
    if (Product === Backpack) {
        backpack.pop();
    } else if (Product === Camera) {
        camera.pop();
    }
    if (backpack.length === 0) {
        removeBackpack.classList.add("removeItem");
        removeBackpack.classList.remove("addItem");
        removeBackpack.innerHTML = "";   
    }
    if (camera.length === 0) {
        removeCamera.classList.remove("addItem");
        removeCamera.classList.add("removeItem");
        removeCamera.innerHTML = "";
    }
    if (cartTotal > 1500) {
        shipping.innerHTML = "Shipping: $10"
    } else if (cartTotal <= 1500) {
        shipping.innerHTML = "Shipping: $50"
    }
    detailedItems.innerHTML = "Backpack: " + backpack.length + " , " + "Camera: " + camera.length;
    totalPrice.innerHTML = "Cart Total: $" + cartTotal;
}