import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaListAlt, FaPlusCircle, FaEye, FaTasks } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Tasks() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [tareasFiltradas, setTareasFiltradas] = useState([]);


  const tareasDummy = [
  { id: 1, name: "Revisar informes", description: "Revisar informes mensuales del área de finanzas" },
  { id: 2, name: "Enviar correo", description: "Enviar correo a proveedores" },
  { id: 3, name: "Actualizar CRM", description: "Actualizar contactos y oportunidades en el sistema" },
  { id: 4, name: "Revisar informes", description: "Revisión duplicada para probar filtro múltiple" },
];

  // useEffect(() => {
  //   fetch("http://localhost:8090/task/api/tasks")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const ordenadas = data.sort((a, b) => a.id - b.id);
  //       setTareas(ordenadas);
  //     })
  //     .catch((err) => {
  //       console.error("Error al cargar tareas:", err);
  //     });
  // }, []);

  useEffect(() => {
  const ordenadas = tareasDummy.sort((a, b) => a.id - b.id);
  setTareas(ordenadas);
}, []);

const buscarTarea = () => {
  const resultados = tareasDummy.filter((t) =>
    `${t.name} ${t.description}`.toLowerCase().includes(filtro.toLowerCase())
  );

  if (resultados.length > 0) {
    setTareasFiltradas(resultados);
    const modal = new window.bootstrap.Modal(document.getElementById("modalTarea"));
    modal.show();
  } else {
    toast.error("Tarea no encontrada");
  }
};

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
    <div className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar tarea por nombre o descripción"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          style={{ maxWidth: "300px" }}
        />
        <button className="btn btn-outline-primary" onClick={buscarTarea}>
          Buscar
        </button>
      </div>
    </div>

    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Detalles</th>
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

    <div
      className="modal fade"
      id="modalTarea"
      tabIndex="-1"
      aria-labelledby="modalTareaLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalTareaLabel">
              Resultado de la búsqueda
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
          </div>
          <div className="modal-body">
            {tareasFiltradas.map((tarea) => (
              <div key={tarea.id} className="mb-3 border-bottom pb-2">
                <p><strong>ID:</strong> {tarea.id}</p>
                <p><strong>Nombre:</strong> {tarea.name}</p>
                <p><strong>Descripción:</strong> {tarea.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <ToastContainer position="top-center" autoClose={3000} />
  </div>
);
}

export default Tasks;