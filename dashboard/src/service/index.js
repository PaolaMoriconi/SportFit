const getAllProducts = async () => {
    try {
        const respuesta = await fetch("http://localhost:3000/apis/AllProducts")
        const resultado = await respuesta.json();
        

        console.log(resultado.products)
        if (respuesta.ok) {
            return resultado.products
            
        }
         
    } catch (error) {

        console.log(error);
    }
    
  }
  const getOneProducts = async (id) => {
    try {
        const respuesta = await fetch(`http://localhost:3000/apis/oneproduct/${id}`)
        const resultado = await respuesta.json();
        

        console.log(resultado.product)
        if (respuesta.ok) {
            return resultado.product
            
        }
         
    } catch (error) {

        console.log(error);
    }
    
  }
  /* const getSelectCategory = async () => {
    try {
        const respuesta = await fetch(`http://localhost:3000/apis/getSelectsCategory`)
        const resultado = await respuesta.json();
        

        console.log(resultado.categories)
        if (respuesta.ok) {
            return resultado.categories
            
        }
         
    } catch (error) {

        console.log(error);
    }
    
  }
  const getSelectColor = async () => {
    try {
        const respuesta = await fetch(`http://localhost:3000/apis/getSelectsColor`)
        const resultado = await respuesta.json();
        

        console.log(resultado.colores)
        if (respuesta.ok) {
            return resultado.colores
            
        }
         
    } catch (error) {

        console.log(error);
    }
    
  }
  const getSelectBrands = async () => {
    try {
        const respuesta = await fetch(`http://localhost:3000/apis/getSelectsBrands`)
        const resultado = await respuesta.json();
        

        console.log(resultado.brands)
        if (respuesta.ok) {
            return resultado.brands
            
        }
         
    } catch (error) {

        console.log(error);
    }
    
  } */
  export {
    getAllProducts,
    getOneProducts,
  /*   getSelectCategory,
    getSelectBrands,
    getSelectColor */
  }