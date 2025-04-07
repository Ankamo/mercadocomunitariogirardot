import Image from "next/image";
import Header from "@/components/header/page";
import NavBar from "@/components/nav/page";
import Footer from "@/components/footer/page";

export default function SobreLaCorporacionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <NavBar />

      <main className="flex-grow flex flex-col items-center text-center py-16 px-4 space-y-16">
        {/* Misión */}
        <section className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-4 text-white">Misión</h2>
          <p className="text-lg text-gray-300">
            El Mercado Comunitario Rosa Blanca tiene como misión promover el desarrollo económico local
            mediante una plataforma inclusiva y moderna que conecta a pequeños productores, emprendedores
            y consumidores de manera eficiente, segura y justa. Fomentamos la economía solidaria,
            la sostenibilidad y el acceso a productos frescos y de calidad, usando herramientas tecnológicas
            que fortalecen el tejido social y comercial de la comunidad.
          </p>
        </section>

        {/* Visión */}
        <section className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-4 text-white">Visión</h2>
          <p className="text-lg text-gray-300">
            Ser el mercado comunitario líder en innovación digital en Colombia, reconocido por transformar
            la forma en que las comunidades acceden, distribuyen y comercializan productos locales. Aspiramos
            a construir un modelo replicable de mercado inteligente que inspire confianza, inclusión y
            progreso sostenible en cada rincón del país.
          </p>
        </section>

        {/* Quiénes Somos */}
        <section className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-4 text-white">Quiénes Somos</h2>
          <p className="text-lg text-gray-300">
            Somos una corporación sin ánimo de lucro dedicada a transformar el
            comercio local mediante la integración de tecnologías emergentes.
            Nuestro equipo está compuesto por profesionales apasionados por el
            desarrollo comunitario, la innovación y la sostenibilidad. Creemos en
            el poder de la colaboración y la tecnología para generar un impacto
            positivo en las economías locales, fortaleciendo los lazos entre
            productores y consumidores.
          </p>
        </section>

        {/* Reseña Histórica */}
        <section className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-4 text-white">Reseña Histórica</h2>
          <p className="text-lg text-gray-300 text-justify">
            La Plaza de Mercado de Girardot, diseñada por el arquitecto alemán
            Leopoldo Rother entre 1946 y 1948, es un ícono de la arquitectura
            moderna en Colombia. Ubicada cerca del río Magdalena, su estructura de
            concreto se caracteriza por la ausencia de muros de cierre, permitiendo
            una ventilación natural que contrasta con el clima cálido de la región.
            En 1993, fue declarada Monumento Nacional, resaltando su valor
            patrimonial y cultural. A lo largo de los años, ha sido un punto de
            encuentro esencial para comerciantes y la comunidad, reflejando la
            diversidad y riqueza cultural de Girardot.
          </p>
        </section>

        {/* Organigrama */}
        <section className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-4 text-white">Organigrama</h2>
          <div className="w-full h-96 relative">
            <Image
              src="/logo.webp"
              alt="Organigrama de la Corporación"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </section>

        {/* Normatividad */}
        <section className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-4 text-white">Normatividad</h2>
          <p className="text-lg text-gray-300 mb-6">
            Consulta y descarga las actas, reglamentos y lineamientos que rigen el funcionamiento del Mercado Comunitario Rosa Blanca. Estos documentos garantizan la transparencia, participación y equidad en cada proceso.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center justify-between bg-gray-800 px-6 py-4 rounded-lg shadow">
              <span className="text-white">Acta de Constitución del Mercado Comunitario</span>
              <a
                href="/docs/acta-constitucion.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 underline"
              >
                Descargar
              </a>
            </li>
            <li className="flex items-center justify-between bg-gray-800 px-6 py-4 rounded-lg shadow">
              <span className="text-white">Reglamento Interno de Participación</span>
              <a
                href="/docs/reglamento-interno.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 underline"
              >
                Descargar
              </a>
            </li>
            <li className="flex items-center justify-between bg-gray-800 px-6 py-4 rounded-lg shadow">
              <span className="text-white">Lineamientos para la Administración del Mercado</span>
              <a
                href="/docs/lineamientos-administracion.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 underline"
              >
                Descargar
              </a>
            </li>
          </ul>
        </section>

      </main>

      <Footer />
    </div>
  );
}
