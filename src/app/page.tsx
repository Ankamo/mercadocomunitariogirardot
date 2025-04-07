import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Cabecera */}
      <header className="bg-blue-950 py-4">
        <div className="max-w-screen-xl mx-auto flex items-center justify-center px-4 relative">
          <div className="flex items-center justify-between w-full md:w-4/5">
            {/* Logo izquierdo */}
            <div className="w-24 h-24 flex-shrink-0 relative">
              <Image
                src="/logo.webp"
                alt="Logo Izquierdo"
                fill
                className="object-contain rounded-full"
              />
            </div>

            {/* Texto centrado */}
            <div className="text-center text-white flex-grow px-4">
              <h1 className="text-xl sm:text-2xl font-bold">
                Mercado Comunitario Rosa Blanca
              </h1>
              <p className="text-sm sm:text-base text-gray-300">
                Tienda Virtual Mercado Comunitario Rosa Blanca
              </p>
            </div>

            {/* Logo derecho */}
            <div className="w-24 h-24 flex-shrink-0 relative">
              <Image
                src="/logojac.webp"
                alt="Logo Derecho"
                fill
                className="object-contain rounded-full"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Barra de Navegación */}
      <nav className="bg-blue-950 py-2 px-6 md:px-10 border-t border-b border-blue-900">
        <div className="container mx-auto">
          <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-sm">
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cartelera</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sobre la Corporación</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tienda Virtual</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Multimedia</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contacto</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white font-semibold transition-colors">Ingresar</a></li>
          </ul>
        </div>
      </nav>

      {/* Contenido Principal */}
      <main className="flex-grow flex flex-col items-center justify-center text-center py-16 px-4">
        {/* Imagen Central */}
        <div className="w-56 h-56 relative mb-8">
          <Image
            src="/logo.webp"
            alt="Imagen Central"
            fill
            className="object-contain"
          />
        </div>

        {/* Textos */}
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
          Bienvenido a Mercado Comunitario Rosa Blanca
        </h2>
        <p className="text-base text-gray-300 mb-8 max-w-xl">
          Tu plataforma para conectar con la comunidad y acceder a productos locales.
        </p>

        {/* Botón */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300">
          Ingresar a la WebApp
        </button>
      </main>
    </div>
  );
}
