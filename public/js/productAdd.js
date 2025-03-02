const subcategoria = document.querySelector("#subcategoria");
const categoria = document.querySelector("#categoria");
const containerTalles = document.querySelector("#containerTalles");
const formCheck = document.querySelectorAll(".form-check");

const visibleCheck = () => {
  if (subcategoria.value != "" && categoria.value != "") {

    switch (subcategoria.value) {
      case "1":
        formCheck.forEach((element) => {
          console.log(element);
          if (
            element.firstChild.nextElementSibling.id > 1 ||
            element.firstChild.nextElementSibling.id == "U"
          ) {
            element.style.display = "none";
            element.style.visibility = "hidden";
          } else {
            element.style.display = "block";
            element.style.visibility = "visible";
          }
        });
        break;
      case "2":
        formCheck.forEach((element) => {
          if (
            categoria.value == 3 &&
            element.firstChild.nextElementSibling.id < 35
          ) {
            element.style.display = "block";
            element.style.visibility = "visible";
          } else if (
            categoria.value != 3 &&
            element.firstChild.nextElementSibling.id >= 35
          ) {
            element.style.display = "block";
            element.style.visibility = "visible";
          } else {
            element.style.display = "none";
            element.style.visibility = "hidden";
          }
        });
        break;
      case "3":
        console.log("ingrese al caso 3");

        formCheck.forEach((element) => {
          if (element.firstChild.nextElementSibling.id == "U") {
            element.style.display = "block";
            element.style.visibility = "visible";
          } else {
            element.style.display = "none";
            element.style.visibility = "hidden";
          }
        });
        break;
      default:
        break;
    }

    containerTalles.style.display = "block";
    containerTalles.style.visibility = "visible";
  }
};

subcategoria.addEventListener("change", function (e) {
  visibleCheck();
});

categoria.addEventListener("change", function (e) {
  visibleCheck();
});

const form = document.getElementById("productAddForm")
const alerta = document.querySelectorAll("small")
const imagen = document.querySelector(".imagenCreate")
const talles = document.querySelectorAll(".form-check-input-lg")


function showImagePrev(e, i) {

    const div = document.getElementById('div' + i);
    const label = document.getElementById('label' + i);
    const button = document.getElementById('button' + i);
    const img = document.getElementById('img' + i);
    label.innerHTML = '<i class="fa-solid fa-arrows-rotate"></i> Cambiar'
    div.classList.remove('border')
    if(!img){
        const img = document.createElement('img');
        img.setAttribute('id','img' + i);
        img.setAttribute('src', URL.createObjectURL(e.target.files[0]))
        img.classList.add('img-fluid');
        img.style.maxHeight = "100%"
        div.appendChild(img);
        button.hidden = false;
    }else{
        img.setAttribute('src', URL.createObjectURL(e.target.files[0]))
    }

}

function removeImagePrev(i) {
    const div = document.getElementById('div' + i);
    const label = document.getElementById('label' + i);
    const button = document.getElementById('button' + i);
    const img = document.getElementById('img' + i);
    const input = document.getElementById('image' + i);
    input.value = null;
    div.classList.add('border');
    div.removeChild(img);
    label.innerHTML = '<i class="fa-solid fa-plus"></i> Agregar'
    button.hidden = true;

}




function isValidNumber(valor) {
return valor >= 0? /^-?\d*\.?\d*$/.test(valor) : false;
}
    
console.log(form.elements);
for (let i = 0; i < 10; i++) {
    
form.elements[i].addEventListener("blur",(e)=>{


     //SI EL CAMPO NO ESTA VACIO LE DA UN TRUE
        if (form.elements[i].value !== "") {
            alerta[i].textContent=""
           form.elements[i].className="form-control is-valid"
        }
            //DETECTA SI HAY UN CAMPO VACIO
            if (form.elements[i].value == "") {
                alerta[i].textContent= `El campo esta vacio`
                form.elements[i].className="form-control is-invalid"
                }
    
            if (form.elements[0].value !== "" && form.elements[0].value.length < 10 ) {
                alerta[0].textContent= `Debe tener mas de 10 caracteres`
                form.elements[0].className="form-control is-invalid"
                }
        if (form.elements[9].value !== "" && form.elements[9].value.length < 150 ) {
                alerta[9].textContent= `Debe tener mas de 150 caracteres`
                form.elements[9].className="form-control is-invalid"
                }

    ////////SOLO NUMEROS EN LOS CAMPOS DE NUMEROS Y LIMITACION EN EL DESCUENTO
        if (!isValidNumber(form.elements[6].value)&& form.elements[6].value !== "") {
            form.elements[6].className="form-control is-invalid"
            alerta[6].textContent="Solo caracteres numericos"
            }
        if (!isValidNumber(form.elements[7].value)&& form.elements[7].value !== "") {
            form.elements[7].className="form-control is-invalid"
            alerta[7].textContent="Solo caracteres numericos"
            }
            if (!isValidNumber(form.elements[8].value)&& form.elements[8].value !== "") {
              form.elements[8].className="form-control is-invalid"
              alerta[8].textContent="Solo caracteres numericos"
                  } 
        if (form.elements[8].value > 80) {
        form.elements[8].className="form-control is-invalid"

        alerta[8].textContent="No puedes dar descuentos mayores a 80%"
            } 
       
            console.log(alerta);

    })
   }//CIERRE DEL FOR 

     function losTalles(talle) {
     let holaa = 0
     for (let i = 0; i < talle.length; i++) {
         if (talle[i].checked) {
             holaa ++
         } 
     }
     return holaa
 }
  
    form.addEventListener("submit", (e) =>{
        let error =  0  
       
/////////////VALIDACION DE LA IMAGEN Y LAS TALLAS////////////////
         const eee = losTalles(talles)
        if (!eee) {
            alerta[8].textContent="Debes seleecionar al menos una talla"
            error ++
        }else{
            alerta[8].textContent=""
            
        } 

           if (imagen.files.length > 4) {
                alerta[11].textContent="Solo puede subir 4 imagenes"
                form.elements[11].className="form-control is-invalid"
                error ++
            }else{
                form.elements[11].className="form-control is-valid"
                alerta[11].textContent=""
                
            } 
      
  
           

            for (let i = 0; i < 10; i++) {

                if (form.elements[i].value == "") {
                alerta[i].textContent= `El campo esta vacio`
                form.elements[i].className="form-control is-invalid" 
                error++}

            if (form.elements[i].className == "form-control is-valid") {
                
               
            }

            if (error == 0) {
                form.submit()
            }
            console.log(error)
            e.preventDefault()

     }//CIERRE DEL FOR      
    })

    
    
