// Script.js

var cart = [];
var sizeOfCart = document.getElementById('cart-count');

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  if(localStorage.getItem('items') == null) {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => localStorage.setItem('items', JSON.stringify(data)));
  }
  
  if(localStorage.getItem('cart') == null) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  cart = JSON.parse(localStorage.getItem('cart'));

  if(localStorage.getItem('sizeOfCart') == null) {
    localStorage.setItem('sizeOfCart', JSON.stringify(sizeOfCart.textContent));
  }
  sizeOfCart.textContent = JSON.parse(localStorage.getItem('cartSize'));

  let dataStored = JSON.parse(localStorage.getItem('items'));
  let array = document.getElementById('array');

  for (let i; i < dataStored.length; i++) {
    let curr = new ProductItem(dataStored[i].imagesrc, dataStored[i].title, dataStored[i].price, dataStored[i].id, cart.includes(dataStored[i].id));
    array.appendChild(curr);
  }

});
