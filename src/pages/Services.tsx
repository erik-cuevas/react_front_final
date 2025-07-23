// src/pages/Services.tsx
export default function Services() {
  return (
    <main className="container mt-5">
      <h2 className="text-center mb-5">Nuestros Servicios</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100" style={{ backgroundColor: '#4DB33D' }}>
            <img src="/imagenes/insertardocumento.png" className="card-img-top" alt="Insertar documentos" />
            <div className="card-body">
              <h5 className="card-title">Insertar Documentos</h5>
              <p className="card-text text-white">Aprende a insertar uno o varios documentos a tu colección. (Sin requisitos previos).</p>
              <p className="text-white font-weight-bold">$24.990</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100" style={{ backgroundColor: '#4DB33D' }}>
            <img src="/imagenes/buscardocumentos.png" className="card-img-top" alt="Buscar documentos" />
            <div className="card-body">
              <h5 className="card-title">Buscar Documentos</h5>
              <p className="card-text text-white">Aprende a buscar documentos fácilmente. (Sin requisitos previos).</p>
              <p className="text-white font-weight-bold">$24.990</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100" style={{ backgroundColor: '#4DB33D' }}>
            <img src="/imagenes/actualizardocumentos.png" className="card-img-top" alt="Actualizar documentos" />
            <div className="card-body">
              <h5 className="card-title">Actualizar Documentos</h5>
              <p className="card-text text-white">Aprende cómo actualizar documentos. (Requiere insertar y buscar documentos).</p>
              <p className="text-white font-weight-bold">$29.990</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100" style={{ backgroundColor: '#4DB33D' }}>
            <img src="/imagenes/borrardocumentos.png" className="card-img-top" alt="Borrar documentos" />
            <div className="card-body">
              <h5 className="card-title">Borrar Documentos</h5>
              <p className="card-text text-white">Aprende cómo borrar documentos. (Requiere insertar documentos).</p>
              <p className="text-white font-weight-bold">$29.990</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100" style={{ backgroundColor: '#4DB33D' }}>
            <img src="/imagenes/otorgarpermisos.png" className="card-img-top" alt="Otorgar permisos" />
            <div className="card-body">
              <h5 className="card-title">Otorgar Permisos</h5>
              <p className="card-text text-white">Aprende a crear usuarios y asignarles permisos. (Requiere todos los cursos anteriores).</p>
              <p className="text-white font-weight-bold">$34.990</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100" style={{ backgroundColor: '#4DB33D' }}>
            <img src="/imagenes/activadoresBD.png" className="card-img-top" alt="Configuración de activadores" />
            <div className="card-body">
              <h5 className="card-title">Configuración de Activadores</h5>
              <p className="card-text text-white">Aprende a configurar activadores dentro de tu base de datos. (Requiere todos los cursos anteriores).</p>
              <p className="text-white font-weight-bold">$34.990</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
