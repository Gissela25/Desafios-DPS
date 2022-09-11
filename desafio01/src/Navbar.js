export default function Navbar(){
    return   <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Desafio1</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Ejercicio1">Ejercicio1</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Ejercicio2">Ejercicio2</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
}