// Script.js

var cart = [];
var cartCount = document.getElementById('cart-count');

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  if(localStorage.getItem('items') == null) {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => localStorage.setItem('items', JSON.stringify(data)));
  }

  let itemDataset = JSON.parse(localStorage.getItem('items'));
  let productsList = document.getElementById('prduct-list');
  
  if(localStorage.getItem('cart') == null) {
    localStorage.setItem('cart', 
    JSON.stringify(cart));
  }
  cart = JSON.parse(localStorage.getItem('cart'));

  if(localStorage.getItem('cartSize') == null) {
    localStorage.setItem('cartSize', JSON.stringify(cartCount.textContent));
  }
  cartCount.textContent = JSON.parse(localStorage.getItem('cartSize'));

  for(let i = 0; i < itemDataset.length; i++){
    let product = prods.appendChild (document.createElement('product-item'));
        product.setAttribute('src'  , items[i].image);
        product.setAttribute('title', items[i].title);
        product.setAttribute('price', items[i].price);
        product.setAttribute('id'   , items[i].id   );
    
    if(cart.has(''+(items[i].id))) {product.cartButton();}

  }
});
