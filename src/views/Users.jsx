import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaUserPlus, FaInfoCircle } from "react-icons/fa";

function Users() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8090/user/api/taskuser")
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch((err) => console.error("Error al obtener usuarios:", err));
  }, []);

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3">
          <FaUsers className="me-2 text-primary" />
          Lista de Usuarios
        </h1>
        <Link to="/users/new" className="btn btn-primary">
          <FaUserPlus className="me-2" />
          Crear Usuario
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.name}</td>
                <td>{usuario.email}</td>
                <td>{usuario.mobile}</td>
                <td>
                  <Link to={`/users/${usuario.id}`} className="btn btn-sm btn-outline-info">
                    <FaInfoCircle className="me-1" />
                    Ver Detalles
                  </Link>
                </td>
              </tr>
            ))}
            {usuarios.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  No hay usuarios registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;