import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaListAlt, FaPlusCircle, FaEye, FaTasks } from "react-icons/fa";

function Tasks() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8090/task/api/tasks")
      .then((res) => res.json())
      .then((data) => {
        const ordenadas = data.sort((a, b) => a.id - b.id);
        setTareas(ordenadas);
      })
      .catch((err) => {
        console.error("Error al cargar tareas:", err);
      });
  }, []);

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3">
          <FaListAlt className="me-2" />
          Listado de Tareas
        </h1>
        <Link to="/tasks/new" className="btn btn-success">
          <FaPlusCircle className="me-2" />
          Crear Tarea
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tareas.map((tarea) => (
              <tr key={tarea.id}>
                <td>{tarea.id}</td>
                <td>{tarea.name}</td>
                <td>{tarea.description}</td>
                <td>
                  <Link to={`/tasks/${tarea.id}`} className="btn btn-sm btn-outline-info">
                    <FaEye className="me-1" />
                    Ver Detalles
                  </Link>
                </td>
              </tr>
            ))}
            {tareas.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center text-muted">
                  <FaTasks className="me-2" />
                  No hay tareas registradas.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tasks;