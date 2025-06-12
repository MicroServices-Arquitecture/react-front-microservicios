import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CrearTarea() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8090/task/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) navigate("/tasks");
    } catch (err) {
      console.error("Error creando tarea:", err);
    }
  };

  return (
    <div className="container py-5">
      <div className="card mx-auto" style={{ maxWidth: "500px" }}>
        <div className="card-body">
          <h4 className="card-title mb-4 text-center">Crear Nueva Tarea</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Nombre de la tarea"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Descripción</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="form-control"
                placeholder="Descripción de la tarea"
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Crear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CrearTarea;