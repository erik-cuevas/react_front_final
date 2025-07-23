// src/components/Navbar.tsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#4DB33D' }}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="/imagenes/logomongodb.png"
            alt="Logo MongoDB"
            width={120}
            height={80}
            className="d-inline-block align-top"
          />
          MONGODB Web
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Sobre Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Servicios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contáctanos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}