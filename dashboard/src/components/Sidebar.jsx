import { Link } from "react-router-dom"

export const Sidebar = () => {
  return (
    <header>
    <nav className="navbar">
      <div className="container-fluid ">
        <li className="nav-item">
          <Link className="navbar-brand" to="#">SportFit</Link>
          <Link className="navbar-brand" aria-current="page" href="/">Inicio</Link>
        </li>  
  
        <form className="d-flex" action="/admin/products/search" method="GET">
          <input className="form-control me-2" type="search" placeholder="Buscar" name="keyword"/>
          <button className="btn btn-outline-dark" type="submit"><i className="fa fa-search"></i></button>
        </form>
      </div>
    </nav>
  </header>
  )
}
