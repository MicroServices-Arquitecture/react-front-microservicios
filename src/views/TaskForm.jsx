import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlusCircle, FaRegFileAlt, FaAlignLeft } from "react-icons/fa";
import { toast } from "react-toastify";

function TaskForm() {
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

      if (res.ok) {
        toast.success("Tarea creada exitosamente");
        setTimeout(() => navigate("/tasks"), 2000); // redirige después de 2s
      } else {
        toast.error("Error al crear la tarea");
      }
    } catch (err) {
      console.error("Error creando tarea:", err);
      toast.error("Error de conexión con el servidor");
    }
  };

  return (
    <div className="container py-5">
      <div className="card mx-auto" style={{ maxWidth: "500px" }}>
        <div className="card-body">
          <h4 className="card-title mb-4 text-center">
            <FaPlusCircle className="me-2" />
            Crear Nueva Tarea
          </h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                <FaRegFileAlt className="me-2" />
                Nombre
              </label>
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
              <label className="form-label">
                <FaAlignLeft className="me-2" />
                Descripción
              </label>
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
              <FaPlusCircle className="me-2" />
              Crear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;