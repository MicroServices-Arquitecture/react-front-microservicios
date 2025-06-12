import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaMobileAlt, FaUserPlus } from "react-icons/fa";
import { toast } from "react-toastify";

function UserForm() {
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

      if (res.ok) {
        toast.success("Usuario creado correctamente");
        setTimeout(() => navigate("/users"), 2000); // Espera 2s antes de redirigir
      } else {
        toast.error("No se pudo crear el usuario");
      }
    } catch (err) {
      console.error("Error creando usuario:", err);
      toast.error("Error de red al crear el usuario");
    }
  };

  return (
    <div className="container py-5">
      <div className="card mx-auto" style={{ maxWidth: "500px" }}>
        <div className="card-body">
          <h4 className="card-title mb-4 text-center">
            <FaUserPlus className="me-2" />
            Crear Usuario
          </h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                <FaUser className="me-2 text-secondary" />
                Nombre
              </label>
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
              <label className="form-label">
                <FaEnvelope className="me-2 text-secondary" />
                Correo Electrónico
              </label>
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
              <label className="form-label">
                <FaMobileAlt className="me-2 text-secondary" />
                Teléfono
              </label>
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
              <FaUserPlus className="me-2" />
              Crear Usuario
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserForm;