
import { PropTypes } from "prop-types";
export const Buttons = () => {
  return (
    <>
    
  <div className="col-12 d-flex justify-content-between">
  <div>
    <input
      className="form-control"
      type="file" name="images" id="images" value=""
      multiple hidden />

    <label className="btn btn-lg btn-outline-dark w-100">Imágenes</label>
  </div>
  <small className="text-danger">

  </small>
  <button type="submit" className="btn btn-lg btn-primary">
    Guardar
  </button>
</div>
</>
  )
}
Buttons.propTypes={
  producto : PropTypes.array
}