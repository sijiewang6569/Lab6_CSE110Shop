// product-item.js

class ProductItem extends HTMLElement {

  constructor(imgsrc, title, price, itemID, isInCart) {

    super();
    this.attachShadow({ mode: "open" });

    const li = document.createElement('li');
    const img = document.createElement('img');
    const itemPrice = document.createElement('p');
    const itemTitle = document.createElement('p');
    var button = document.createElement('button');

    li.setAttribute("class", "product");
    img.setAttribute("src", imgsrc);
    img.setAttribute("alt", title); 
    img.width = 200;
    itemTitle.setAttribute("class", "title");
    itemTitle.textContent = title;
    itemPrice.setAttribute("class", "price");
    itemPrice.textContent = "$" + price;  
    if (isInCart == true) {
      button.textContent = "Remove from Cart";
    } 
    else {
      button.textContent = "Add to Cart";
    }
    
    this.shadowRoot.append(li);
    li.appendChild(img);
    li.appendChild(itemTitle);
    li.appendChild(itemPrice);
    li.appendChild(button);

    this.shadowRoot.innerHTML = 
    `<style>
      .price {
        color: green;
        font-size: 1.8em;
        font-weight: bold;
        margin: 0;
      }
      
      .product {
        align-items: center;
        background-color: white;
        border-radius: 5px;
        display: grid;
        grid-template-areas: 
        "image"
        "title"
        "price"
        "add";
        grid-template-rows: 67% 11% 11% 11%;
        height: 450px;
        filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
        margin: 0 30px 30px 0;
        padding: 10px 20px;
        width: 200px;
      }
      
      .product > button {
        background-color: rgb(255, 208, 0);
        border: none;
        border-radius: 5px;
        color: black;
        justify-self: center;
        max-height: 35px;
        padding: 8px 20px;
        transition: 0.1s ease all;
      }
      
      .product > button:hover {
        background-color: rgb(255, 166, 0);
        cursor: pointer;
        transition: 0.1s ease all;
      }
      
      .product > img {
        align-self: center;
        justify-self: center;
        width: 100%;
      }
      
      .title {
        font-size: 1.1em;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      
      .title:hover {
        font-size: 1.1em;
        margin: 0;
        white-space: wrap;
        overflow: auto;
        text-overflow: unset;
      }
    </style>`;

    button.onclick = function() {clickButton()};
    function clickButton() {
      var sizeOfCart = document.getElementById("cart-count");
      var cart = JSON.parse(localStorage.getItem("cart"));
      if (button.innerHTML == "Add to Cart") {
          alert("Added to Cart!");
          sizeOfCart.textContent = Number(sizeOfCart.textContent) + 1;
          cart.push(itemID);
          button.innerHTML = "Remove from Cart";
      } 
      else {
          if(Number(sizeOfCart.textContent) > 0) {
              sizeOfCart.textContent = Number(sizeOfCart.textContent) - 1;
          }
          alert("Remove from Cart!");
          cart.splice(cart.indexOf(itemID),1);
          button.innerHTML = "Add to Cart";
      }
      localStorage.setItem('sizeOfCart', JSON.stringify(sizeOfCart.textContent));
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    this.shadowRoot.append(li);   
  }
}

customElements.define("product-item", ProductItem);
