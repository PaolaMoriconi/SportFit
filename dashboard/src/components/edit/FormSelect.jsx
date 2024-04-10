
import { PropTypes } from "prop-types";



export const FormSelect = ({producto}) => {

   

    return (
      <>
      
      <div className="col-12 col-md-6 mb-3">
      <div className="form-floating">
        <select name="categoria" className="form-select" id="categoria"
          aria-label="Floating label select example">
          <option value={producto.id} selected hidden>
            
            </option>
          
   
        
        </select>
  
        <label>Categoria</label>
  
      </div>
      <small className="text-danger">
       
      </small>
    </div>
    <div className="col-12 col-md-6 mb-3">
      <div className="form-floating">
        <select name="section" className="form-select" id="section"
          aria-label="Floating label select example">
          <option value="" selected hidden></option>
         
          
  
        </select>
  
        <label>Sección</label>
  
      </div>
      <small className="text-danger">
        
      </small>
    </div>
  
    <div className="col-12 col-md-6 mb-3">
  
      <div className="form-floating">
        <select name="marca" className="form-select" id="marca" aria-label="Floating label select example">
          <option value="" selected hidden></option>
          <option value="" selected hidden></option>
           
         
            

          
        </select>
  
        <label>Marca</label>
      </div>
      <small className="text-danger">
  
      </small>
    </div>
  
    <div className="col-12 col-md-6 mb-3">
  
      <div className="form-floating">
        <select name="color" className="form-select" id="color"
          aria-label="Floating label select example">
          <option value="" selected hidden></option>
       
            <option value="">
              
            </option>
            
        </select>
  
        <label>Color</label>
      </div>
      <small className="text-danger">
       
      </small>
    </div>
    <div className="col-12 mb-3">
                      <label className="form-label">Talles {producto.name}</label>
                      <small className="text-danger">
                        
                       </small>

                      <div className="d-flex">
                        
                          <div className="form-check" >
                            <input className="form-check-input-lg" name="talles" type="checkbox" value="" id=""/>
                            <label className="form-check-label">
                              
                            </label>
                          </div>
                        
                      
                      </div> 
                                           
                    </div>
  
    </>
    )
  }
  FormSelect.propTypes={
    producto : PropTypes.array
}