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

window.onload( 
  visibleCheck()
)

subcategoria.addEventListener("change", function (e) {
  visibleCheck();
});

categoria.addEventListener("change", function (e) {
  visibleCheck();
});







/*const form = document.getElementById("editproductForm")
const alerta = document.querySelectorAll("small")
const imagen = document.getElementById("image")
const talles = document.querySelectorAll(".form-check-input-lg")

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

function showImages(images, idProduct) {
    const boxImages = document.getElementById('box-images');
    boxImages.innerHTML = null;
   
    for (let i = 0; i < 4; i++) {
        boxImages.innerHTML += `<div class="col-12 col-md-6 col-lg-3 d-flex align-items-center position-relative" style="height: 250px" id="box${i}">`
        if (images[i]) {
            document.getElementById('box' + i).innerHTML += `
            <img class="img-fluid"  src="/images/products/${images[i].name}" alt="${images[i].name}">
            <button onclick="removeImage(${images[i].id}, ${idProduct})" type="button" class="btn btn-danger position-absolute bottom-0 end-0"><i class="fa-solid fa-trash-can"></i></button>
            `
        }else{
            document.getElementById('box' + i).innerHTML += `
            <div class="d-flex justify-content-center align-items-center" style="height: 100px; width: 200px;">
            <input type="file" hidden id="image${i}" onchange="addImage(event,${idProduct})"/>
            <label for="image${i}" class="btn btn-sm btn-outline-dark"><i class="fa-solid fa-plus"></i> Agregar</label>
          </div>`
        }
        
    }
}

async function addImage(e,idProduct){
    try {

        const data = new FormData();
        data.append("image", e.target.files[0]);
      

        const response = await fetch(`http://localhost:3000/apis/images?id=${idProduct}`,{
            method : 'POST',
            body : data
        })

        const result = await response.json();

        showImages(result.images, idProduct)

           
    } catch (error) {
        console.log(error);
    }
}

async function removeImage(idImage, idProduct) {
    console.log(idImage);
    try {
        const response = await fetch(`http://localhost:3000/apis/images?id=${idImage}&product=${idProduct}`,{
            method : 'DELETE',
        })
        const result = await response.json();

        showImages(result.images, idProduct)

        
    } catch (error) {
        console.log(error);
    }
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
            error ++
        }else{
            alerta[8].textContent=""
            
        }

            if (imagen.files.length > 4) {
                alerta[9].textContent="Solo puede subir 4 imagenes"
                form.elements[14].className="form-control is-invalid"
                error ++
            }else{
                form.elements[14].className="form-control is-valid"
                alerta[9].textContent=""
                
            }

            for (let i = 0; i < form.elements.length -8; i++) {

                if (form.elements[i].value == "") {
                alerta[i].textContent= `El campo esta vacio`
                form.elements[i].className="form-control is-invalid"
                error++ }

            if (form.elements[i].className == "form-control is-valid") {
                
               console.log(error)
            }
            if (error == 0) {
                form.submit()
            }
            e.preventDefault()

     }//CIERRE DEL FOR     
    })

    */
    