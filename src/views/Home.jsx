import { Link } from "react-router-dom";
import { FaUsers, FaTasks } from "react-icons/fa";

function Home() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold">Bienvenido al Sistema de Gestión</h1>
        <p className="lead text-muted">Selecciona una opción para continuar</p>
      </div>

      <div className="d-flex flex-column align-items-center gap-3">
        <Link to="/users" className="btn btn-primary btn-lg w-50">
          <FaUsers className="me-2" />
          Gestionar Usuarios
        </Link>

        <Link to="/tasks" className="btn btn-success btn-lg w-50">
          <FaTasks className="me-2" />
          Gestionar Tareas
        </Link>
      </div>
    </div>
  );
}

export default Home;