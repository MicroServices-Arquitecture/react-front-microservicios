import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaUserPlus, FaInfoCircle } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Users() {
  const [filtro, setFiltro] = useState("");
  const [usuariosEncontrados, setUsuariosEncontrados] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://ms-gateway-production-97bb.up.railway.app/task/api/taskuser")
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch((err) => console.error("Error al obtener usuarios:", err));
  }, []);

  const buscarUsuario = () => {
  const resultados = usuarios.filter((u) =>
    `${u.name} ${u.email} ${u.mobile}`.toLowerCase().includes(filtro.toLowerCase())
  );

  if (resultados.length > 0) {
    setUsuariosEncontrados(resultados);

    const modal = new window.bootstrap.Modal(document.getElementById("modalUsuario"));
    modal.show();
  } else {
    toast.error("Usuario no encontrado");
  }
};

  return (
  <>
    <div
      className="modal fade"
      id="modalUsuario"
      tabIndex="-1"
      aria-labelledby="modalUsuarioLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalUsuarioLabel">
              Datos del Usuario
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
          </div>
          <div className="modal-body">
            {usuariosEncontrados.length > 0 ? (
              usuariosEncontrados.map((u) => (
                <div key={u.id} className="mb-3 border-bottom pb-2">
                  <p><strong>ID:</strong> {u.id}</p>
                  <p><strong>Nombre:</strong> {u.name}</p>
                  <p><strong>Email:</strong> {u.email}</p>
                  <p><strong>Teléfono:</strong> {u.mobile}</p>
                </div>
              ))
            ) : (
              <p>No se encontró información del usuario.</p>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>

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

      <div className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por nombre, correo o teléfono"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            style={{ maxWidth: "300px" }}
          />
          <button className="btn btn-outline-primary" onClick={buscarUsuario}>
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
              <th>Email</th>
              <th>Teléfono</th>
              <th>Detalles</th>
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
    <ToastContainer position="top-center" autoClose={3000} />
  </>
);
}

export default Users;