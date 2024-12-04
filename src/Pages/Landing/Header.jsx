import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate();
  return (
    <header id="header" className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <a href="/" className="flex items-center">
          <h1 className="text-2xl font-bold">Psicologic</h1>
        </a>

        <nav id="navmenu">
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#hero" className="text-primary">
                Inicio
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primary">
                Servicios
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-primary">
                Equipo
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary">
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <button
            className="bg-primary p-2 rounded-md text-secondary hover:scale-105"
            onClick={() => {
              navigation("/auth/login");
            }}
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
