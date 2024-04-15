const talles = document.querySelector(".article--productDetail--sizes");
const tallesP = document.querySelectorAll(".article--productDetail--sizes a");
let size;
// SELECIONABLE DE LOS TALLES

tallesP.forEach((a) => {
  a.addEventListener("click", (h) => {
    h.preventDefault();
    tallesP.forEach((t) => {
      t.style.backgroundColor = "#fff";
    });
    size = h.target.text;
    a.style.backgroundColor = "#3f8880";
  });
});

// BOTON PARA AGREGAR CANTIDAD DE PRODUCTOS

// FUNCION PARA CAMBIAR DINÁMICAMENTE LA IMAGEN PRINCIPAL
function changeImage(event) {
  const imageOriginal = document.getElementById("img-main").src;
  document.getElementById("img-main").src = event.target.src;
  event.target.src = imageOriginal;
}

const addCart = (id) => {
  const includes = cart.find((elemento) => elemento.id == id);

  if (!includes) {
    if(size){
    cart.push({ id, cantidad: "1",size });
    sessionStorage.setItem("cart", JSON.stringify(cart));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Producto agregaro al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
    contador.innerText = cart.length;
    contador.style.display = 'inline';
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Debe seleccionar un talle!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
  }
};
