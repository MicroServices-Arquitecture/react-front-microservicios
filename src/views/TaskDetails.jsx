import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskDetails() {
  const { id } = useParams();
  const [tarea, setTarea] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8090/task/api/tasks/id/${id}`)
      .then((res) => res.json())
      .then((data) => setTarea(data))
      .catch((error) => console.error("Error al cargar la tarea:", error));
  }, [id]);

  if (!tarea) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-3">Cargando tarea...</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="card mx-auto" style={{ maxWidth: "600px" }}>
        <div className="card-body">
          <h4 className="card-title mb-4">Detalles de la Tarea</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>ID:</strong> {tarea.id}
            </li>
            <li className="list-group-item">
              <strong>Nombre:</strong> {tarea.name}
            </li>
            <li className="list-group-item">
              <strong>Descripción:</strong> {tarea.description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;