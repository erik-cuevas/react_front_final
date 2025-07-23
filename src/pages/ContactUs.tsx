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
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (editIndex !== null) {
      const nuevos = [...contactos];
      nuevos[editIndex] = form;
      setContactos(nuevos);
      setEditIndex(null);
    } else {
      setContactos([...contactos, form]);
    }
    setForm({ nombre: '', telefono: '', email: '', pais: '', mensaje: '' });
  };

  const handleEdit = (index: number) => {
    setForm(contactos[index]);
    setEditIndex(index);
  };

  const handleDelete = (index: number) => {
    const nuevos = contactos.filter((_, i) => i !== index);
    setContactos(nuevos);
    if (editIndex === index) setEditIndex(null);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">Contáctanos</h2>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h3 className="card-title mb-4 text-center">Formulario de contacto</h3>
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
                <button type="submit" className="btn btn-success">
                  {editIndex !== null ? 'Actualizar' : 'Enviar'}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h3 className="text-center mb-4">Ubicación</h3>
              <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 4px 24px rgba(37,99,235,0.10)' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9400.81026387084!2d-70.5865687323325!3d-33.58744027889228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d718a032972d%3A0x45da5699698e2261!2sINACAP%20Puente%20Alto!5e0!3m2!1ses-419!2scl!4v1750546825843!5m2!1ses-419!2scl"
                  width="100%"
                  height="370"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación INACAP"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="mb-3">Contactos guardados</h4>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th>Nombre</th>
                      <th>Teléfono</th>
                      <th>Email</th>
                      <th>País</th>
                      <th>Mensaje</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contactos.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="text-center text-muted">
                          No hay contactos aún.
                        </td>
                      </tr>
                    ) : (
                      contactos.map((c, i) => (
                        <tr key={i}>
                          <td>{c.nombre}</td>
                          <td>{c.telefono}</td>
                          <td>{c.email}</td>
                          <td>{c.pais}</td>
                          <td>{c.mensaje}</td>
                          <td>
                            <button className="btn btn-sm btn-primary mr-2" onClick={() => handleEdit(i)}>
                              Editar
                            </button>
                            <button className="btn btn-sm btn-danger" onClick={() => handleDelete(i)}>
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
