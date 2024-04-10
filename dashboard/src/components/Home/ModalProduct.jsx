import { PropTypes } from "prop-types";
import { Button,Modal } from 'react-bootstrap'
export const ModalProduct = ({show,handleClose, product}) => {
  return (
    <Modal show={show} onHide={handleClose}>
    
    <Modal.Body>
    <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel"> {product.name} </h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
    <div className="col-8">
          <img src="/images/banner1.jpg" className="img-fluid" alt=""/>
      </div>
    <ul className="list-group">
                  <li className="list-group-item"><b>Precio: </b>${product.price}</li>
                  <li className="list-group-item"><b>Categoria: </b>{product.category}</li>
                  
                  <li className="list-group-item"><b>Talles: </b>{product.discount}</li>
                  
                  <li className="list-group-item"><b>Descuento: </b>{product.discount || "0"}%</li>
                  <li className="list-group-item"><b>Descripcion: </b>{product.description}</li>
                </ul>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cerrar
      </Button>
    </Modal.Footer>
  </Modal>
  )
}
ModalProduct.propTypes={
    show : PropTypes.bool,
    handleClose : PropTypes.func,
    product: PropTypes.object,

}
