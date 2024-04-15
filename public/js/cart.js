if (!sessionStorage.getItem("cart")) {
    sessionStorage.setItem("cart",JSON.stringify([]))
}

let cart = JSON.parse(sessionStorage.getItem("cart"))

const contador = document.querySelector('#contador-cart');
if (cart.length > 0){
    contador.innerText = cart.length;
    contador.style.display = 'inline';
}else{
    contador.style.display = 'none';
} 

