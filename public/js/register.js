const form = document.getElementById("registerForm")
const alerta = document.querySelectorAll("small")
const email = document.getElementById("input_email")
const alertOkey = document.querySelectorAll(".is-invalid")
const checkBox = document.getElementById("remember")

function isValidEmail(value) {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
}

const checkEmail = async (email)  =>{
    try {
        const response = await fetch("http://localhost:3000/apis/users/checkemail?email="+email)
        const result = await response.json()
        return result.isRegisted
    } catch (error) {
        console.log(error.msg)
    }
}

//VALIDACION CUANDO DEJO LA CASILLA OSEA DE BLUR

for (let i = 0; i < form.elements.length -3; i++) {

form.elements[i].addEventListener("blur",async (e)=>{
    



    //DETECTA SI HAY UN CAMPO VACIO
        if (form.elements[i].value === "") {
            alerta[i].textContent="Formulario vacio"
            form.elements[i].className="form-control is-invalid"
    
        }

     //SI EL CAMPO NO ESTA VACIO SACA EL ERROR 
       if (form.elements[i].value !== "") {
            alerta[i].textContent=""
           form.elements[i].className="form-control is-valid"
        }
        if(!isValidEmail(form.elements[2].value)){
            alerta[2].textContent="No es una direccion de correo valida"
            form.elements[2].className="form-control is-invalid"
        }
        
        //SI EL CAMPO TIENE MENOS DE 3 CARACTERES
        if (form.elements[i].value.length < 4 && form.elements[i].value.length > 0) {
            alerta[i].textContent="Debe tener mas de 3 caracteres"
            form.elements[i].className="form-control is-invalid"
        }
        
    // VALIDACION SI LAS CONTRASEÑAS COINCIDEN
           if (form.elements[4].value !== "") {
            if (form.elements[4].value !== form.elements[3].value) {
            alerta[4].textContent="Las contraseñas no coinciden"
            form.elements[4].className="form-control is-invalid"
            }
            //SI LA CONTRASEÑA TIENE MENOS DE 5 CARACTERES
            if (form.elements[3].value.length>5) {
                alerta[3].textContent="La contraseña debe tener mas de 5 caracteres"
                form.elements[3].className="form-control is-invalid"
            }
            //QUE SEA UN EMAIL VALIDO
            

            
        }
        try {
            if (await checkEmail(email.value))  {
                alerta[2].textContent="el Email ya fue utilizado"
                form.elements[2].className="form-control is-invalid"    
            }
            
        } catch (error) {
            console.log(error)
        }
        // VALIDACIONES DE EMAIL YA UTILIZADO

    })
}//CIERRE DEL FOR   
    
//////////////////////////////////////////////////
    
    form.addEventListener("submit", (e) =>{
        let error = 0
    for (let i = 0; i < form.elements.length -3; i++) {

        if(form.elements[i].classList.value== "form-control is-valid" ){
            error++
        }
       
        if (error === 5 && checkBox.checked) {
            form.submit()
        }  
    }
   
    e.preventDefault() 
    })
   