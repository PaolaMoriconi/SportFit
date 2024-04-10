
import { PropTypes } from "prop-types";
import { useState } from "react";
import "./a.css"
import { ModalProduct } from "./ModalProduct";
import { getOneProducts } from "../../service";
import { Link } from "react-router-dom";

export const Listproducts = ({products}) => {
const [show,setShow ] = useState(false);
const [oneProduct, setOneProduct] = useState({});



  const handleClose = () => setShow(false);

  const handleShow = async (id) =>{

    const product = await getOneProducts(id)
    console.log(product);
    setOneProduct(product);

    setShow(true);

  } 
  
   
    


  return (
    

      
      <tbody> 
       
        {
            products.map(product =>{
                return(

            <tr key={product.id}> 
            <th scope="row">{product.id}</th>
           <td>{product.name}</td>
           <td>{product.name}</td>
           <td>{product.price}</td> 
           <td>{product.discount}</td>
           <td>
            <div className="d-flex"> 
            {
              product.sizes.map(s =>{
                return(
                <div key={s.name} className="form-check" >
                <input className="form-check-input-lg" name="sizes" type="checkbox"  value="" id=""/>
                <label className="form-check-label"> {s.name}</label>
              </div>
              )
              })
            }
               
       
            </div>          
  
           </td>
           <td> 
           <div className="d-flex gap-2">
              <button onClick={()=>handleShow(product.id)} className="btn btn-sm btn-outline-primary border-none" data-bs-toggle="modal">
            <i className="fa-solid fa-eye"></i></button>
          

              <Link  className="btn btn-sm btn-outline-success border-none" to={"/edit/"+product.id}><i className="fa-solid fa-pen-to-square"></i></Link>             
              <button className="btn btn-sm btn-outline-danger border-none"
              data-bs-toggle="modal"
              data-bs-target="#modalDeleteWarning">
              <i className="fa-solid fa-trash"></i>
            </button>
            <ModalProduct show={show} handleClose={handleClose} product={oneProduct}/>
            </div>
          </td>    
            
           </tr>
                )

                
            })
        }
        
           
          
    
  
        
        
      </tbody>
    
  )
}
Listproducts.propTypes={
    products : PropTypes.array
}