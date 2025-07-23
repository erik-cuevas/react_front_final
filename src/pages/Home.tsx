// src/pages/Home.tsx
export default function Home() {
  return (
    <main className="container mt-5">
      <div id="carouselInicio" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselInicio" data-slide-to="0" className="active"></li>
          <li data-target="#carouselInicio" data-slide-to="1"></li>
          <li data-target="#carouselInicio" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/imagenes/carrusel/carrusel1.png" className="d-block w-100" alt="Carrusel 1" style={{ height: '400px', objectFit: 'cover' }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Expertos en bases de datos.</h5>
              <p>Somos un equipo profesional que te garantiza el aprendizaje básico de MongoDB.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/imagenes/carrusel/carrusel2.png" className="d-block w-100" alt="Carrusel 2" style={{ height: '400px', objectFit: 'cover' }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Cursos 100% online.</h5>
              <p>El trabajo desde casa es una realidad. No pierdas el tiempo en ir a la oficina.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/imagenes/carrusel/carrusel3.png" className="d-block w-100" alt="Carrusel 3" style={{ height: '400px', objectFit: 'cover' }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Certificación en MongoDB.</h5>
              <p>Si apruebas todos los cursos te certificamos como DBA.</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselInicio" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Anterior</span>
        </a>
        <a className="carousel-control-next" href="#carouselInicio" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Siguiente</span>
        </a>
      </div>

      <h2 className="text-center my-5">Más información acá</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <a href="/services" className="text-decoration-none">
            <div className="card h-100" style={{ backgroundColor: '#4DB33D' }}>
              <img src="/imagenes/serviciosindex.png" className="card-img-top" alt="Nuestros cursos" />
              <div className="card-body">
                <h5 className="card-title">Servicios</h5>
                <p className="card-text text-white">Aquí encontrarás todos nuestros cursos de MongoDB.</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-6 mb-4">
          <a href="/contact" className="text-decoration-none">
            <div className="card h-100" style={{ backgroundColor: '#4DB33D' }}>
              <img src="/imagenes/contactanos.jpg" className="card-img-top" alt="Contáctanos" />
              <div className="card-body">
                <h5 className="card-title">Contáctanos</h5>
                <p className="card-text text-white">Toda la información para contactarnos acá</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}