import Image from "next/image";
import Header from "@/components/header/page";
import NavBar from "@/components/nav/page";
import Footer from "@/components/footer/page";

export default function CarteleraPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <NavBar />

      <main className="flex-grow px-6 py-12 text-white space-y-16 bg-black/90">
        {/* Título Principal */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Cartelera Comunitaria</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Descubre las últimas novedades del Mercado Comunitario Rosa Blanca: productos en promoción, eventos especiales y más.
          </p>
        </section>

        {/* Productos en Descuento */}
        <section>
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">🛒 Productos en Descuento</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-4 rounded-xl shadow hover:scale-105 transition">
              <h4 className="font-bold text-lg mb-1">Yuca Orgánica</h4>
              <p className="text-sm text-gray-300 mb-2">Antes $3.000 - Ahora $2.200/kg</p>
              <Image src="/productos/yuca.webp" alt="Yuca" width={300} height={200} className="rounded-lg object-cover" />
            </div>
            <div className="bg-white/10 p-4 rounded-xl shadow hover:scale-105 transition">
              <h4 className="font-bold text-lg mb-1">Huevos Campesinos</h4>
              <p className="text-sm text-gray-300 mb-2">Bandeja x30 a $10.000</p>
              <Image src="/productos/huevos.webp" alt="Huevos" width={300} height={200} className="rounded-lg object-cover" />
            </div>
            <div className="bg-white/10 p-4 rounded-xl shadow hover:scale-105 transition">
              <h4 className="font-bold text-lg mb-1">Frijol Bola Roja</h4>
              <p className="text-sm text-gray-300 mb-2">Descuento del 15%</p>
              <Image src="/productos/frijol.webp" alt="Frijol" width={300} height={200} className="rounded-lg object-cover" />
            </div>
          </div>
        </section>

        {/* Eventos y Actividades */}
        <section>
          <h3 className="text-2xl font-semibold mb-4 text-green-400">📅 Próximos Eventos</h3>
          <ul className="space-y-4">
            <li className="bg-white/10 p-4 rounded-lg shadow-md">
              <strong className="text-white">📍 Feria de Economía Solidaria:</strong> 15 de Abril – Parque Bolívar
            </li>
            <li className="bg-white/10 p-4 rounded-lg shadow-md">
              <strong className="text-white">🎓 Taller sobre Finanzas Populares:</strong> 20 de Abril – Sede Comunal
            </li>
            <li className="bg-white/10 p-4 rounded-lg shadow-md">
              <strong className="text-white">🎶 Música y Cultura en la Plaza:</strong> 27 de Abril – Mercado Central
            </li>
          </ul>
        </section>

        {/* Noticias */}
        <section>
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">📰 Noticias</h3>
          <div className="space-y-3">
            <p className="bg-white/10 p-3 rounded-lg">🚨 ¡Nuevo punto de pago digital activado para facilitar tus compras!</p>
            <p className="bg-white/10 p-3 rounded-lg">✅ Más de 20 asociaciones comunitarias ya están registradas en la plataforma.</p>
          </div>
        </section>

        {/* Protagonista de la Semana */}
        <section>
          <h3 className="text-2xl font-semibold mb-4 text-pink-400">🌟 Protagonista de la Semana</h3>
          <div className="bg-white/10 p-6 rounded-xl flex flex-col md:flex-row items-center gap-6">
            <Image src="/protagonistas/donaluz.webp" alt="Doña Luz" width={200} height={200} className="rounded-full object-cover" />
            <div>
              <h4 className="text-xl font-bold mb-2">Doña Luz Marina</h4>
              <p className="text-gray-300">
                Productora comunitaria de yuca orgánica en Nariño. Con más de 5 años de experiencia, promueve prácticas agrícolas sostenibles y comercio justo en el mercado Rosa Blanca.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
