export default function NavBar() {
    return (
      <nav className="bg-blue-950 py-2 px-6 md:px-10 border-t border-b border-blue-900">
        <div className="container mx-auto">
          <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-sm">
            <li><a href="/cartelera" className="text-gray-300 hover:text-white transition-colors">Cartelera</a></li>
            <li><a href="/corporacion" className="text-gray-300 hover:text-white transition-colors">Sobre la Corporación</a></li>
            <li><a href="/tienda" className="text-gray-300 hover:text-white transition-colors">Tienda Virtual</a></li>
            <li><a href="/multimedia" className="text-gray-300 hover:text-white transition-colors">Multimedia</a></li>
            <li><a href="/contacto" className="text-gray-300 hover:text-white transition-colors">Contacto</a></li>
            <li><a href="/ingresar" className="text-gray-300 hover:text-white font-semibold transition-colors">Ingresar</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  