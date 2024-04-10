const talles = document.querySelector(".article--productDetail--sizes")
const tallesP = document.querySelectorAll(".article--productDetail--sizes a")
console.log("hola")

// SELECIONABLE DE LOS TALLES

     tallesP.forEach(a => {
        a.addEventListener("click",(h) =>{
        h.preventDefault()
        tallesP.forEach(t => {
            t.style.backgroundColor="#b5bac9"
        });
            a.style.backgroundColor="#3f8880"         
        }) 
    });; 

// BOTON PARA AGREGAR CANTIDAD DE PRODUCTOS

// FUNCION PARA CAMBIAR DINÁMICAMENTE LA IMAGEN PRINCIPAL
function changeImage(event) {
    const imageOriginal =  document.getElementById('img-main').src
    document.getElementById('img-main').src = event.target.src
    event.target.src = imageOriginal
}
