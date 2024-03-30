const form = document.getElementById("loginForm")
const alerta = document.querySelectorAll("small")
const email = document.getElementById("email")

const password = document.getElementById("password")


const checkPassword = async (email,password)  =>{
    try {                                                                           
        const response = await fetch(`http://localhost:3000/apis/users/checkpassword?email=${email}&password=${password}`)
        const result = await response.json()
        return result.isRegisted
    } catch (error) {
        console.log(error.msg)
    }
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
 
   
//////////////////////////////////////////////////
    for (let i = 0; i < form.elements.length-2; i++) {

    form.addEventListener("submit", async(e)=>{
        e.preventDefault()
        if ( form[i].value !== "") {
            alerta[i].textContent=""
        }

            switch (true) {
                case await checkPassword(email.value,password.value):
                    form.submit()
                    break;
    
                case await checkEmail(email.value):
                    alerta[1].textContent="contraseña incorrecta"
                    break;
                default:
                    alerta[1].textContent="este usuario no esta registrado"
                    break;
                }

                if ( form[i].value == "") {
                    alerta[i].textContent="Campo vacio"
                }
               
   })    
    }


