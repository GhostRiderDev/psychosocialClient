import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigation = useNavigate();
  return (
    <div>
      <header id="header" className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between py-4">
          <a href="index.html" className="flex items-center">
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

      <main>
        <section id="hero" className="relative h-screen bg-gray-900">
          <img
            src="https://www.psychologs.com/wp-content/uploads/2023/08/Roles-and-Responsibilities-of-Being-a-Clinical-Psychologist.jpg"
            alt=""
            className="w-full h-full object-cover opacity-50"
          />

          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <div className="max-w-2xl px-4">
              <h2 className="text-4xl font-bold mb-4">Bienvenido a Psico</h2>
              <p className="text-xl mb-8">
                Promovemos la salud mental y el bienestar emocional.
              </p>
              <a
                href="#about"
                className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition"
              >
                Agenda tu cita
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ofrecemos una amplia gama de servicios psicológicos para
                ayudarte en tu bienestar mental
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Item 1 */}
              <div className="transform hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-white p-8 rounded-lg shadow-lg relative overflow-hidden">
                  <div className="text-primary text-4xl mb-6">
                    <i className="bi bi-clipboard-check"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Evaluación Psicológica
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Realizamos evaluaciones completas para entender mejor tus
                    necesidades y desarrollar un plan personalizado.
                  </p>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full -z-10"></div>
                </div>
              </div>

              {/* Service Item 2 */}
              <div className="transform hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-white p-8 rounded-lg shadow-lg relative overflow-hidden">
                  <div className="text-primary text-4xl mb-6">
                    <i className="bi bi-people"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Terapia de Pareja
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ayudamos a las parejas a mejorar su comunicación y resolver
                    conflictos de manera saludable.
                  </p>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full -z-10"></div>
                </div>
              </div>

              {/* Service Item 3 */}
              <div className="transform hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-white p-8 rounded-lg shadow-lg relative overflow-hidden">
                  <div className="text-primary text-4xl mb-6">
                    <i className="bi bi-heart-pulse"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Manejo del Estrés
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Aprende técnicas efectivas para manejar el estrés y la
                    ansiedad en tu vida diaria.
                  </p>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contacto</h2>
              <p className="max-w-3xl mx-auto">
                Puedes comunicarte con nosotros a través de los siguientes
                canales...
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <i className="bi bi-geo-alt text-primary text-2xl"></i>
                  <div>
                    <h3 className="font-bold mb-2">Direccion</h3>
                    <p>Calle 50 # 65-40, Medellín, Antioquia, Colombia</p>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Tu Email"
                    className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded hover:bg-primary-dark"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Landing;
