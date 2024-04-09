const form = document.getElementById("productAddForm")
const alerta = document.querySelectorAll("small")
const imagen = document.getElementById("images")
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


function losTalles(talle) {
    let holaa = 0
    for (let i = 0; i < talle.length; i++) {
        if (talle[i].checked) {
            holaa ++
        } 
    }
    return holaa
}


function isValidNumber(valor) {
return valor >= 0? /^-?\d*\.?\d*$/.test(valor) : false;
}
    

for (let i = 0; i < form.elements.length -8; i++) {
    
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
        if (form.elements[7].value !== "" && form.elements[7].value.length < 150 ) {
                alerta[7].textContent= `Debe tener mas de 150 caracteres`
                form.elements[7].className="form-control is-invalid"
                }

    ////////SOLO NUMEROS EN LOS CAMPOS DE NUMEROS Y LIMITACION EN EL DESCUENTO
        if (!isValidNumber(form.elements[5].value)&& form.elements[5].value !== "") {
            form.elements[5].className="form-control is-invalid"
            alerta[5].textContent="Solo caracteres numericos"
            }
        if (!isValidNumber(form.elements[6].value)&& form.elements[6].value !== "") {
            form.elements[6].className="form-control is-invalid"
            alerta[6].textContent="Solo caracteres numericos"
            }
        if (form.elements[6].value > 80) {
        form.elements[6].className="form-control is-invalid"
        alerta[6].textContent="No puedes dar descuentos mayores a 80%"
            } 
       
   

    })
   }//CIERRE DEL FOR 
    
  
    form.addEventListener("submit", (e) =>{
        let error =  0  
/////////////VALIDACION DE LA IMAGEN Y LAS TALLAS////////////////
        const eee = losTalles(talles)
        if (!eee) {
            alerta[8].textContent="Debes seleecionar al menos una talla"
        }else{
            alerta[8].textContent=""
            error ++
        }

            if (imagen.files.length > 4) {
                alerta[9].textContent="Solo puede subir 4 imagenes"
                form.elements[14].className="form-control is-invalid"
            }else{
                form.elements[14].className="form-control is-valid"
                alerta[9].textContent=""
                error ++
            }

            if (!imagen.files.length) {
                alerta[9].textContent="Debes subir al menos una imagen"
                form.elements[14].className="form-control is-invalid"
            }

            for (let i = 0; i < form.elements.length -8; i++) {

                if (form.elements[i].value == "") {
                alerta[i].textContent= `El campo esta vacio`
                form.elements[i].className="form-control is-invalid" }

            if (form.elements[i].className == "form-control is-valid") {
                error++
                console.log(error)
            }

            if (error == 10) {
                form.submit()
            }
            e.preventDefault()

     }//CIERRE DEL FOR     
    })

    
    