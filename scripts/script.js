// Script.js

var cart = []
window.addEventListener('DOMContentLoaded', () => {
  
    if (localStorage.getItem("items") == null) {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => localStorage.setItem("items", JSON.stringify(data)));
    }

    if (localStorage.getItem("cart") == null) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    cart = JSON.parse(localStorage.getItem("cart"));
  
    let sizeOfCart = document.getElementById("cart-count");
    if(JSON.parse(localStorage.getItem('count')) == null) {
        localStorage.setItem('count', JSON.stringify(sizeOfCart.textContent));
        sizeOfCart.textContent  = JSON.parse(localStorage.getItem('count'))
    } 
    else {
        sizeOfCart.textContent  = JSON.parse(localStorage.getItem('count'));
    }
  
    let storedData = JSON.parse(localStorage.getItem("items"));
    let list = document.getElementById("product-list");
    for(let d in storedData){
        let currItem = new ProductItem(storedData[d].image, storedData[d].title, 
            storedData[d].price, storedData[d].id, cart.includes(storedData[d].id));
        list.appendChild(currItem);
    }
});
