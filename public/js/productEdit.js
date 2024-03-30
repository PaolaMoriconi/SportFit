const form = document.getElementById("editproductForm")
const alerta = document.querySelectorAll("small")
const imagen = document.getElementById("image")


function isValidNumber(valor) {
   
    return /^-?\d*\.?\d*$/.test(valor);
}


for (let i = 0; i < form.elements.length -2; i++) {

form.elements[i].addEventListener("blur",(e)=>{



    //DETECTA SI HAY UN CAMPO VACIO
        if (form.elements[i].value == "") {
            alerta[i].textContent="Formulario vacio"
            form.elements[i].className="form-control is-invalid"
    
        }
     //SI EL CAMPO NO ESTA VACIO SACA EL ERROR 
        if (form.elements[i].value !== "") {
            alerta[i].textContent=""
           form.elements[i].className="form-control is-valid"
        }
     
    if (!isValidNumber(form.elements[1].value)) {
    form.elements[1].className="form-control is-invalid"
    alerta[1].textContent="Solo caracteres numericos"
    }
    if (!isValidNumber(form.elements[2].value)) {
    form.elements[2].className="form-control is-invalid"
    alerta[2].textContent="Solo caracteres numericos"
    }

    if (+form.elements[2].value > 80) {
        form.elements[2].className="form-control is-invalid"
        alerta[2].textContent="No puedes dar descuentos mayores a 80%"
    }
    
   

    })
   }//CIERRE DEL FOR 
    //////////////////////////////////////////////////
  
    form.addEventListener("submit", (e) =>{
        let error =  0
         for (let i = 0; i < form.elements.length -1; i++) {
            
            if (!imagen.files.length) {
                alerta[8].textContent="Debes subir al menos una imagen"
            }else{
                form.elements[8].className="form-control is-valid"
                alerta[8].textContent=""
            }
            if (form.elements[i].className=="form-control is-valid") {
                error ++
            }}
            if (error !== 9) {
                form.submit()
            }
       
           
            e.preventDefault()
        
        

        
    })

    
    