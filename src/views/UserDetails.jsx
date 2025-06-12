import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8090/user/api/taskuser/id/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error loading user:", error));
  }, [id]);

  if (!user) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-3">Cargando Usuario...</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="card mx-auto" style={{ maxWidth: "600px" }}>
        <div className="card-body">
          <h4 className="card-title mb-4">Detalles del Usuario</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>ID:</strong> {user.id}
            </li>
            <li className="list-group-item">
              <strong>Nombre:</strong> {user.name}
            </li>
            <li className="list-group-item">
              <strong>Email:</strong> {user.email}
            </li>
            <li className="list-group-item">
              <strong>Móvil:</strong> {user.mobile}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;