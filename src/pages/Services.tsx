// src/pages/Services.tsx
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 mb-4">
          <Link to="/contact">
            <div className="card h-100" style={{ backgroundColor: '#4DB33D' }}>
              <img src="/imagenes/insertardocumento.png" className="card-img-top" alt="Insertar documentos" />
              <div className="card-body">
                <h5 className="card-title text-white">Insertar documentos</h5>
                <p className="card-text text-white">Aprende a insertar uno o varios documentos a tu colección.</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4 mb-4">
          <Link to="/contact">
            <div className="card h-100" style={{ backgroundColor: '#4DB33D' }}>
              <img src="/imagenes/buscardocumentos.png" className="card-img-top" alt="Buscar documentos" />
              <div className="card-body">
                <h5 className="card-title text-white">Buscar documentos</h5>
                <p className="card-text text-white">Aprende a buscar documentos fácilmente.</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4 mb-4">
          <Link to="/contact">
            <div className="card h-100" style={{ backgroundColor: '#4DB33D' }}>
              <img src="/imagenes/actualizardocumentos.png" className="card-img-top" alt="Actualizar documentos" />
              <div className="card-body">
                <h5 className="card-title text-white">Actualizar documentos</h5>
                <p className="card-text text-white">Aprende a actualizar uno o varios documentos.</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4 mb-4">
          <Link to="/contact">
            <div className="card h-100" style={{ backgroundColor: '#4DB33D' }}>
              <img src="/imagenes/borrardocumentos.png" className="card-img-top" alt="Borrar documentos" />
              <div className="card-body">
                <h5 className="card-title text-white">Borrar documentos</h5>
                <p className="card-text text-white">Aprende a borrar uno o más documentos.</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4 mb-4">
          <Link to="/contact">
            <div className="card h-100" style={{ backgroundColor: '#4DB33D' }}>
              <img src="/imagenes/otorgarpermisos.png" className="card-img-top" alt="Otorgar permisos" />
              <div className="card-body">
                <h5 className="card-title text-white">Otorgar permisos</h5>
                <p className="card-text text-white">Aprende a crear usuarios y administrar permisos.</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4 mb-4">
          <Link to="/contact">
            <div className="card h-100" style={{ backgroundColor: '#4DB33D' }}>
              <img src="/imagenes/activadoresBD.png" className="card-img-top" alt="Configuración de activadores" />
              <div className="card-body">
                <h5 className="card-title text-white">Configuración de activadores</h5>
                <p className="card-text text-white">Configura activadores en tu base de datos MongoDB.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}