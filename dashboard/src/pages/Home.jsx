import { List } from "../components/Home/List";
import { Listproducts } from "../components/Home/Listproducts"
import { useEffect,useState } from "react"
import { getAllProducts } from "../service";


export const Home = () => {
  const [products,setProducts]= useState([])

  useEffect(() => {
    getAllProducts()
    .then(products =>{
      setProducts(products)
    }).catch(error => console.log(error))

    
   
  }, []); 
  return (
    <main className="container">  
    <section className="row my-5">
      <div className="col-12 col-md-10 mx-auto">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
      
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/admin" className="text-primary">Productos</a></li>
                
                  <li className="breadcrumb-item active" aria-current="page">Productos de:</li>
                  <h4 className="card-title"></h4>
               
                </ol>
            </nav>
          
            <a className="btn btn-primary" href="/products/agregar"> Nuevo </a>
          </div>
          <div className="card-body table-resposive">
            
          <table className="table">
          <List/>


          <Listproducts products ={products}/>      
          </table>


              <div className="alert alert-warning" role="alert">
                Producto no encontrado
              </div>
          </div>
        </div>
      </div>

    </section>
  </main>
  )
}
