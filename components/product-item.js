class ProductItem extends HTMLElement {

  constructor(imagesrc, title, price, id, addOrRemove) {

    super();
    this.attachShadow( { mode: "open" });
    
    const li = this.shadowRoot.appendChild(document.createElement('li'));
    const img = document.createElement('img');
    var price = document.createElement('p');
    var title = document.createElement('p');
    const button = document.createElement('button');

    li.setAttribute('class', 'product');
    img.setAttribute('src', imagesrc);
    img.setAttribute('alt', title);
    title.textContent = title;
    price.textContent = "$" + price;
    title.setAttribute('class', 'title');
    price.setAttribute('class', 'price');
    button.textContent = "Add to Cart";
    if(addOrRemove) {
      button.textContent = 'Remove from Cart';
    }

    li.appendChild(img);
    li.appendChild(price);
    li.appendChild(title);
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

      button.onclick = function () {
        var sizeOfCart = doucment.getElementById('cart-count');
        var cart = JSON.parse(localStorage.getElementById('cart'));
        if(button.textContent == "Add to Cart") {
          button.textContent = "Remove from Cart";
          sizeOfCart.textContent = parseInt(sizeOfCart.textContent) + 1;
          cart.push(id);
          alert("Added to Cart!");
        }
        else {
          button.textContent = "Add to Cart";
          sizeOfCart.textContent = parseInt(sizeOfCart.textContent) - 1;
          cart.splice(cart.indexOf(id), 1);
          alert("Removed from Cart!");
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('sizeOfCart', JSON.stringify(sizeOfCart));
      }
  }
}

customElements.define("product-item", ProductItem);

