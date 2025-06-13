import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaTasks,
  FaUser,
  FaPlus,
  FaInfoCircle,
  FaArrowRight,
} from "react-icons/fa";

function Breadcrumbs() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((p) => p);

  const getIcon = (segment) => {
    switch (segment) {
      case "tasks":
        return <FaTasks className="me-1" />;
      case "users":
        return <FaUser className="me-1" />;
      case "new":
        return <FaPlus className="me-1" />;
      default:
        if (!isNaN(segment)) return <FaInfoCircle className="me-1" />;
        return <FaArrowRight className="me-1" />;
    }
  };

  return (
    <nav className="breadcrumb-custom">
      <Link to="/" className="me-2">
        <FaHome className="me-1" />
        Inicio
      </Link>
      {paths.map((segment, index) => {
        const to = "/" + paths.slice(0, index + 1).join("/");
        const isLast = index === paths.length - 1;

        return (
          <span key={to} className="ms-2">
            /{" "}
            {isLast ? (
              <>
                {getIcon(segment)}
                <strong>{decodeURIComponent(segment)}</strong>
              </>
            ) : (
              <Link to={to} className="ms-2">
                {getIcon(segment)}
                {decodeURIComponent(segment)}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;