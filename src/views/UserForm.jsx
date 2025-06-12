import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CrearUsuario() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8090/user/api/taskuser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) navigate("/users");
    } catch (err) {
      console.error("Error creando usuario:", err);
    }
  };

  return (
    <div className="container py-5">
      <div className="card mx-auto" style={{ maxWidth: "500px" }}>
        <div className="card-body">
          <h4 className="card-title mb-4 text-center">Crear Usuario</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Nombre del usuario"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Correo Electrónico</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="correo@ejemplo.com"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Teléfono</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="form-control"
                placeholder="Ej: 3123456789"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Crear Usuario
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CrearUsuario;