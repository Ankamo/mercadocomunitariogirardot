// src/app/page.tsx
// Componente principal de la página
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Cabecera */}
      <header className="bg-blue-950 py-4 px-6 md:px-10">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Izquierdo (Placeholder) */}
          <div className="flex items-center space-x-2">
             {/* Si tienes la URL de la imagen, usa <Image /> de next/image */}
             {/* Ejemplo con placeholder: */}
             <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold">
               LOGO1
             </div>
             <div>
                <h1 className="text-xl font-bold text-white">Mercado Comunitario Rosa Blanca</h1>
                <p className="text-sm text-gray-300">Tienda Virtual Mercado Comunitario Rosa Blanca</p>
             </div>
          </div>

          {/* Logo Derecho (Placeholder) */}
           {/* Si tienes la URL de la imagen, usa <Image /> de next/image */}
           {/* Ejemplo con placeholder: */}
           <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-xs font-bold">
             LOGO2
           </div>
        </div>
      </header>

      {/* Barra de Navegación */}
      <nav className="bg-blue-950 py-2 px-6 md:px-10 border-t border-b border-blue-900">
        <div className="container mx-auto">
          <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6 text-sm">
            {/* Nota: 'Cartelera' aparece dos veces en la imagen, se incluye aquí también */}
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cartelera</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sobre la Corporación</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tienda Virtual</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Multimedia</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cartelera</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contacto</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors font-semibold">Ingresar</a></li>
          </ul>
        </div>
      </nav>

      {/* Contenido Principal */}
      <main className="flex-grow flex flex-col items-center justify-center text-center py-16 px-4">
        {/* Imagen Central (Placeholder) */}
        {/* Reemplaza este div con tu componente de imagen o SVG */}
        <div className="w-40 h-40 bg-gray-700 rounded-lg mb-8 flex items-center justify-center text-gray-400">
          {/* Puedes usar <Image /> aquí si tienes la imagen */}
          <span>Imagen Central</span>
        </div>

        {/* Textos */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
          Bienvenido a Mercado Comunitario Rosa Blanca
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-xl">
          Tu plataforma para conectar con la comunidad y acceder a productos locales.
        </p>

        {/* Botón */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300">
          Ingresar a la WebApp
        </button>
      </main>

      {/* Pie de página (Opcional, puedes añadirlo si lo necesitas) */}
      {/*
      <footer className="bg-gray-800 text-center py-4 mt-auto">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Mercado Comunitario Rosa Blanca. Todos los derechos reservados.</p>
      </footer>
      */}
    </div>
  );
}
