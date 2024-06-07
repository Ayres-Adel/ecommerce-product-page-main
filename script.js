const cart = document.getElementById("cart");
const cartDiv = document.createElement('div');
const newCartDiv = document.createElement('div');
const numberDiv = document.createElement('div');
const cart_count = document.getElementById("cart_count");
const btn_remove = document.getElementById("btn_remove");
const btn_add = document.getElementById("btn_add");






let numberCart = 0;
let Count = 0;

cartDiv.classList.add("clickcart");
newCartDiv.classList.add("clickcart");
numberDiv.classList.add("numberDiv");


cartDiv.innerHTML = `
<div class = "contentCart">
<p1>Cart</p1>
<hr>
<p2>Your Cart is empty</p2>
</div>`;


function removeFromCart() {
    numberCart--;
    if (numberCart < 0) numberCart = 0; 
    cart_count.textContent = `${numberCart}`;
    Count = numberCart; 
}
function addFromCart() {
    numberCart++;
    cart_count.textContent = `${numberCart}`;
    Count = numberCart;
}
function btn_add_cart() {
    if(numberCart > 0) {
        cartDiv.innerHTML = `
        <div class="contentCart">
          <p>Cart</p>
          <hr class >
          <div class="container_cart">
            <img src="./images/image-product-1-thumbnail.jpg" alt="Product Thumbnail" class = "img_Sneakers">
            <p>Fall Limited Edition Sneakers $125.00 x <label id="number_Produit" ></label><label id="numberOfSneakers">0</label></p>
            <div class="delete_logo" onclick="delet_Sneakers()"><svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg></div>
            </div>
            <button class="Cheakout">Cheakout</button>
        </div>`;
        
        cart.appendChild(cartDiv);
        const number_Produit = document.getElementById("number_Produit");
        const numberOfSneakers = document.getElementById("numberOfSneakers");
        number_Produit.textContent=`${numberCart}`;
        numberOfSneakers.textContent =`:$${numberCart * 125.00}`;

        
        
        cart.appendChild(numberDiv);
        numberDiv.textContent = `${Count}`;
    }
    if(numberCart == 0) {
        cartDiv.innerHTML = `
            <div class = "contentCart">
            <p1>Cart</p1>
            <hr>
            <p2>Your Cart is empty</p2>
            </div>`;

        cart.appendChild(cartDiv) ;   
    }
}
function showcart() {
    cart.addEventListener("click" , event => {
        cart.appendChild(cartDiv);
        cartDiv.classList.toggle("visible");
    })
    document.addEventListener("click" , event => {
        if(!cart.contains(event.target)) {
            cartDiv.classList.remove("visible");
        }
    })
}
function delet_Sneakers() {
    cartDiv.innerHTML = `
    <div class = "contentCart">
    <p1>Cart</p1>
    <hr>
    <p2>Your Cart is empty</p2>
    </div>`;
    cart.appendChild(cartDiv) 
    cart.removeChild(numberDiv); 
}

const header_img = document.getElementById("header_img");
const index_picture = document.getElementById("index_picture");





function SlidePicture(value) {

    document.getElementById("header_img").src =value;
}

function changeImage(value) {

    document.getElementById("index_picture").src =value;
}


const hideSection = document.querySelector(".HideSection");
function showHideSection() {
    header_img.addEventListener("click", (event) => {
          hideSection.style.display = "flex";
      });

      index_picture.addEventListener("click" , event => {
        hideSection.style.display = "none";
      });  
      
       

}

const images = [
    './images/image-product-1.jpg',
    './images/image-product-2.jpg',
    './images/image-product-3.jpg',
    './images/image-product-4.jpg'
  ];
  
  let currentIndex = 0;
  
  function updateImage() {
    const mainImage = document.getElementById('index_picture');
    mainImage.src = images[currentIndex];
    header_img.src = images[currentIndex];
  }
  
  function previousImg() {
    if(currentIndex<=0) {
        currentIndex=images.length;

    }
    currentIndex --;
    updateImage();
  }
  
  function nextImg() {

    if(currentIndex>=images.length-1) {
        currentIndex = 0;
        
    }
     currentIndex ++; 
     updateImage();

  }

  const menu = document.getElementById("menu");
  const showmenu = document.createElement('div'); 
  showmenu.classList.add("showmenu"); 
  

  showmenu.innerHTML = `
    <div class = "showmenu">
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>
            <a href="#">Collections</a>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
    </div>  
  `;
  

  function shownav() {
      menu.appendChild(showmenu);
  }
  






showHideSection();
showcart();