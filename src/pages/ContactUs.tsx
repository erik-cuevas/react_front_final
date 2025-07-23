// src/pages/ContactUs.tsx
import { useState, type FormEvent } from 'react';

interface Contacto {
  nombre: string;
  telefono: string;
  email: string;
  pais: string;
  mensaje: string;
}

export default function ContactUs() {
  const [form, setForm] = useState<Contacto>({
    nombre: '',
    telefono: '',
    email: '',
    pais: '',
    mensaje: ''
  });

  const [contactos, setContactos] = useState<Contacto[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setContactos([...contactos, form]);
    setForm({ nombre: '', telefono: '', email: '', pais: '', mensaje: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h3 className="card-title mb-4 text-center">Contáctanos</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input type="text" className="form-control" id="nombre" value={form.nombre} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono</label>
                  <input type="tel" className="form-control" id="telefono" value={form.telefono} onChange={handleChange} required pattern="[0-9]{9}" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico</label>
                  <input type="email" className="form-control" id="email" value={form.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="pais">País</label>
                  <select className="form-control" id="pais" value={form.pais} onChange={handleChange} required>
                    <option value="">Seleccione un país</option>
                    <option value="Chile">Chile</option>
                    <option value="México">México</option>
                    <option value="Argentina">Argentina</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea className="form-control" id="mensaje" rows={4} value={form.mensaje} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-success">Enviar</button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h3 className="text-center">Ubicación</h3>
              <div style={{ borderRadius: '1rem', overflow: 'hidden' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9400.81026387084!2d-70.5865687323325!3d-33.58744027889228"
                  width="100%" height="370" frameBorder={0} style={{ border: 0 }} allowFullScreen
                  loading="lazy" title="Ubicación">
                </iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12 mt-5">
          <h4>Contactos guardados</h4>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>Email</th>
                <th>País</th>
                <th>Mensaje</th>
              </tr>
            </thead>
            <tbody>
              {contactos.map((c, i) => (
                <tr key={i}>
                  <td>{c.nombre}</td>
                  <td>{c.telefono}</td>
                  <td>{c.email}</td>
                  <td>{c.pais}</td>
                  <td>{c.mensaje}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}