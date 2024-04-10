

import { useEffect, useState } from "react";
import { Buttons } from "../components/edit/Buttons"
import { FormSelect } from "../components/edit/FormSelect"
import { getOneProducts } from "../service";
import { Link, useParams } from 'react-router-dom';
 



export const FormProducts = () => {
  const { id } = useParams();
  const [producto,setProducts]= useState([])

  useEffect(() => {
    getOneProducts(id)
    .then(product =>{
      setProducts(product)
    }).catch(error => console.log(error))

    
   
  }, [id]); 

  return ( 

    <main className="container">
          <section className="row my-5">
            <div className="col-12 col-md-10 mx-auto">
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <nav >
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/" className="text-primary">Inicio</Link>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        Editando: {producto.name}
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="card-body">
                  <form id="productAddForm" action="/" method="POST" encType="multipart/form-data" className="row">
                    <h3>Editando: {producto.name}</h3>
                    <hr />
                    <div className="col-12 col-md-6 mb-3">
                      <div className="form-floating">
                        <input
                          className="form-control"
                          type="text" name="nombre" value={producto.name} />
                        <label >Nombre</label>
                      </div>
                      <small className="text-danger">
                     
                      </small>
                    </div>
                  

<FormSelect producto ={producto}/>

                    <div className="col-6 col-md-3 mb-3">
                      <div className="form-floating">
                        <input
                          className="form-control "
                          type="text" name="precio" value={producto.price} />

                        <label>Precio</label>
                      </div>
                      <small className="text-danger">
                       
                      </small>
                    </div>

                    <div className="col-6 col-md-3 mb-3">
                      <div className="form-floating">
                        <input
                          className="form-control"
                          type="text" name="descuento"
                          value={producto.discount} />

                        <label>Descuento</label>
                      </div>
                      <small className="text-danger">
                        
                      </small>
                    </div>
                    <div className="col-12 mb-3">
                      <div className="form-floating">
                        <textarea name="descripcion" className="form-control" id="descripcion"
                          style={{height: "150px"}} value={producto.description}></textarea>

                        <label>Descripción</label>
                      </div>
                      <small className="text-danger">
                        
                      </small>
                    </div>
<Buttons producto={producto}/>
                   
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
  )
}
