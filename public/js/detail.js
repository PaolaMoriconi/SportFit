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
            a.style.backgroundColor="red"         

        
        }) 
    });;  

// BOTON PARA AGREGAR CANTIDAD DE PRODUCTOS

const signoMas = document.getElementById("incrementoProd")
const numero = document.getElementById("cantidadProd")
const signoMenos = document.getElementById("decrementProd")

let cantidad = 0

signoMas.addEventListener("click",(e)=>{
    e.preventDefault()
    cantidad++
    numero.innerHTML = cantidad
})

signoMenos.addEventListener("click",(e)=>{
    e.preventDefault()
    if (parseInt(numero.innerHTML)>1){
        cantidad--
        numero.innerHTML=cantidad   
    }
})
    


