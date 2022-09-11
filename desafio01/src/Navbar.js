import "./pages/styles/home.css"

import { Link } from "react-router-dom"

export default function Navbar(){
    return   <nav className="navbar navbar-expand-lg navb navbar-dark">
    <div className="container-fluid">
        <Link className="navbar-brand" to="#"><i class="bi bi-filetype-jsx"></i></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/" >Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Ejercicio1">Ejercicio1</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Ejercicio2">Ejercicio2</Link>

                </li>
            </ul>
        </div>
    </div>
</nav>
}