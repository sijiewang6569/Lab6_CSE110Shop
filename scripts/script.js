// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  if(localStorage.getItem('items') == null) {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => localStorage.setItem('items', JSON.stringify(data)));
  }
  
  if(localStorage.getItem('cart') == null) {
    let cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  cart = JSON.parse(localStorage.getItem('cart'));

  let cartCount = document.getElementById('cart-count');
  if(localStorage.getItem('sizeOfCart') == null) {
    localStorage.setItem('sizeOfCart', JSON.stringify(cartCount.textContent));
  }
  cartCount.textContent = JSON.parse(localStorage.getItem('sizeOfCart'));

  let dataStored = JSON.parse(localStorage.getItem('items'));
  let productsList = document.getElementById('products-list');

  if (dataStored != null){
    for (let i; i < dataStored.length; i++) {
      let curr = new ProductItem(dataStored[i].imagesrc, dataStored[i].title, dataStored[i].price, dataStored[i].id, cart.includes(dataStored[i].id));
      productsList.appendChild(curr);
    }
  }
});
