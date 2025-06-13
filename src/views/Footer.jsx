import { FaGithub, FaReact, FaUniversity } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>
        <FaUniversity className="me-2" />
        Proyecto académico | Construido con <FaReact className="text-info" /> React
      </p>
      <p>
        <a
          href="https://github.com/Especializacion-Ingenieria-de-Software/front-react.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="me-1" />
          GitHub
        </a>
      </p>
    </footer>
  );
}

export default Footer;