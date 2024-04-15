if (!sessionStorage.getItem("cart")) {
    sessionStorage.setItem("cart",JSON.stringify([]))
    console.log("carrito");
}

var cart = JSON.parse(sessionStorage.getItem("cart"))

const addCart = (id,name,discount,price,imagen,count = 1) =>{
    console.log(id,name,discount,imagen)

    const product = cart.find(item => item.id == id)

    if (product) {
        
    } else {
        const newProductCart ={
            id,
            name,
            discount,
            price,
            imagen
        }
        cart.push(newProductCart)
        sessionStorage.setItem("cart",JSON.stringify(cart))
     
    }

}






  
    
    
