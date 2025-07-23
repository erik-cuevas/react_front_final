// src/pages/AboutUs.tsx
export default function AboutUs() {
  return (
    <section className="container mt-5">
      <h2 className="text-center mb-4">Sobre Nosotros</h2>
      <p className="text-center mb-5">
        En MongoDB Web, nos dedicamos a promover la transformación digital de las organizaciones a través de tecnologías
        de bases de datos NoSQL modernas y escalables. Nuestro enfoque se centra en brindar recursos accesibles y
        formación continua para estudiantes, desarrolladores y empresas que buscan implementar soluciones basadas en
        MongoDB.
      </p>

      <h2 className="text-center mb-4">Misión</h2>
      <p className="text-center mb-5">
        Nuestra misión es democratizar el acceso al conocimiento sobre MongoDB en el mundo hispanohablante. Buscamos
        formar una comunidad sólida, con herramientas y contenidos que permitan a cualquier persona aprender a utilizar
        bases de datos modernas de forma sencilla y práctica.
      </p>

      <h2 className="text-center mb-4">Visión</h2>
      <p className="text-center mb-5">
        Ser la plataforma líder de enseñanza y apoyo técnico sobre MongoDB en Latinoamérica, impulsando el desarrollo
        profesional y empresarial mediante soluciones accesibles e innovadoras.
      </p>

      <h2 className="text-center mb-4">Nuestra Filosofía</h2>
      <p className="text-center mb-5">
        En MongoDB Web creemos en el poder de compartir conocimiento y crear comunidad. Nuestro lema "Piensa en
        escalabilidad, piensa en MongoDB" refleja nuestro compromiso con soluciones que crecen contigo. Desde comandos
        básicos hasta arquitecturas distribuidas, ofrecemos un camino formativo integral apoyado por tutoriales,
        ejemplos prácticos y acompañamiento continuo.
      </p>

      <div className="text-center">
        <h3 className="my-4">¡Bienvenido a la comunidad MongoDB Web!</h3>
        <img src="/imagenes/bienvenido.png" alt="Equipo MongoDB Web" className="img-fluid" />
      </div>
    </section>
  );
}
